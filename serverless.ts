import type { Serverless } from 'serverless/aws';

const serverlessConfiguration: Serverless = {
    service: {
        name: 'sls-node-typescript',
    },
    frameworkVersion: '2',
    plugins: [
        'serverless-bundle',
        'serverless-pseudo-parameters',
    ],
    provider: {
        name: 'aws',
        runtime: 'nodejs12.x',
        apiGateway: {
            minimumCompressionSize: 1024,
          },
          environment: {
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
          },
        stage: "${opt:stage, 'dev'}",
        region: 'eu-west-1',
    },
    functions: {
        hello: {
            handler: 'src/handlers/hello.handler',
            events: [
                {
                    http: {
                        method: 'get',
                        path: 'hello'
                    }
                }
            ],
        }
    }

};

module.exports = serverlessConfiguration;