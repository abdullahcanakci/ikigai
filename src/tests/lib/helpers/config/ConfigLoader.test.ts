import { beforeAll, describe, expect, it, vi } from "vitest";
import ConfigLoader from "@Lib/helpers/config/ConfigLoader";

describe("lib/helpers/ConfigLoader", () => {
  beforeAll(() => {
    vi.mock("fs", async () => {
      return {
        default: {
          promises: {
            readdir: vi.fn().mockReturnValue(['app.ts'])
          }
        }
      };
    });
  });

  it('should load config from file system', async () => {
    vi.doMock('/stub/app.ts', async () => {
      return {default: {app: 'Config App'}}
    })

    const config = await ConfigLoader('/stub');

    expect(config.get('app.app')).toBe('Config App');
  });
});