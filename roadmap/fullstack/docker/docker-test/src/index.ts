import fastify from 'fastify';

const server = fastify();

server.get('/ping', async (): Promise<string> => {
  return 'pong\n';
});

server.listen({ port: 8080 }, (err, address): void => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
