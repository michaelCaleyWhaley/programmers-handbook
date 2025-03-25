import fastify from 'fastify';

const server = fastify();

server.get('/ping', async (): Promise<string> => {
  return 'pong\n';
});

server.listen({ port: 3000, host: '0.0.0.0' }, (err, address): void => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
