import type Config from "@Lib/helpers/config/Config"
import ConfigLoader from "@Lib/helpers/config/ConfigLoader"
import type { FastifyInstance } from "fastify"
import fastifyPlugin from "fastify-plugin"

declare module "fastify" {
  interface FastifyRequest {
    config: Config
  }

  interface FastifyInstance {
    config: Config
  }
}

interface ConfigProviderOptions {
  root: string
}

const ConfigProvider = fastifyPlugin(
  async (
    fastify: FastifyInstance,
    config: ConfigProviderOptions,
    next: CallableFunction
  ) => {
    const vault = await ConfigLoader(config.root);

    fastify.decorate('config', vault)
      .decorateRequest('config', { getter: () => vault });

    next();
  }, {
    fastify: '>=4.0.0',
    name: 'ConfigProvider'
  }
)

export default ConfigProvider;