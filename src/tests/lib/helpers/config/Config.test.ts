import { beforeEach, describe, expect, it } from "vitest";
import Config from "@Lib/helpers/config/Config";

describe("lib/helpers/Config", () => {
  let config: Config;

  beforeEach(() => {
    config = new Config({
      app: 'Config App'
    });
  });

  it('should return stored config', () => {
    expect(config.get('app')).toBe('Config App');
  });

  it('should return fallback value', () => {
    expect(config.get('port', 'Fallback')).toBe('Fallback');
  })
});