import fs from 'fs';
import path from 'path';
import Config from './Config';

async function ConfigLoader(folder: string): Promise<Config> {
  const files = await fs.promises.readdir(folder);
  const config: Record<string, unknown> = {};

  const modules = await Promise.all(files.map(file => 
    import(/* @vite-ignore */ path.join(folder, file))
  ));

  modules.forEach((module, index) => {
    const configGroup = files[index].replace(/\.[^.]+$/, '');

    Object.entries(module.default).forEach(([key, value]) => {
      config[`${configGroup}.${key}`] = value;
    });
  });

  return new Config(config);
}

export default ConfigLoader;