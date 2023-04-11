import ConfigProvider from "@Lib/plugins/ConfigProvider";
import fastify, { FastifyInstance } from "fastify";

const app: FastifyInstance = fastify({ logger: false });
app.register(ConfigProvider, { root: process.cwd() + '/src/config' })

app.get("/", (req) => req.config.get('app.name'));

if (import.meta.env.PROD) {
  app.listen({ port: 3000 }, (err) => {
    if (err) throw err;
  });
}

export { app };
