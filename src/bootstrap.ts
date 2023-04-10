import fastify, { FastifyInstance } from "fastify";

const app: FastifyInstance = fastify({ logger: false });

app.get("/", () => "Hello World!");

if (import.meta.env.PROD) {
  app.listen({ port: 3000 }, (err) => {
    if (err) throw err;
  });
}

export { app };
