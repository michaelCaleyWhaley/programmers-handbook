import fastify from 'fastify';

const server = fastify();

server.get('/', async (): Promise<string> => {
  return 'working\n';
});

server.get('/ping', async (): Promise<string> => {
  return 'pong\n';
});

server.listen({ port: 80, host: '0.0.0.0' }, (err, address): void => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
