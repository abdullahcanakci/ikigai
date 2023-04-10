import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
    // ...vite configures
    server: {
      // vite server configs, for details see [vite doc](https://vitejs.dev/config/#server-host)
      port: 3000
    },
    build: {
    },
    plugins: [
        ...VitePluginNode({
            // Nodejs native Request adapter
            // currently this plugin support 'express', 'nest', 'koa' and 'fastify' out of box,
            // you can also pass a function if you are using other frameworks, see Custom Adapter section
            adapter: 'fastify',
    
            // tell the plugin where is your project entry
            appPath: './src/bootstrap.ts',
    
            // Optional, default: 'viteNodeApp'
            // the name of named export of you app from the appPath file
            exportName: 'app',
    
            // Optional, default: 'esbuild'
            // The TypeScript compiler you want to use
            // by default this plugin is using vite default ts compiler which is esbuild
            // 'swc' compiler is supported to use as well for frameworks
            // like Nestjs (esbuild dont support 'emitDecoratorMetadata' yet)
            // you need to INSTALL `@swc/core` as dev dependency if you want to use swc
            tsCompiler: 'esbuild',
            swcOptions: {}
        }),
    ],
    optimizeDeps: {
      exclude: [
        'nock', 'mock-aws-s3', 'aws-sdk'
      ],
    },
  });