import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

const hello: APIGatewayProxyHandler = async (_event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({message: 'Hello Typescript Lambda!'}),
  };
}

export const handler = hello