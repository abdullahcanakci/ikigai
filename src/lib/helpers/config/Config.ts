class Config {
  private vault: Record<string, unknown> = {};

  constructor(entries: Record<string, unknown>) {
    this.vault = entries;
  }

  public get<T = string>(key: string, fallback: T | null = null): T|null {
    return this.vault[key] as T ?? fallback;
  }
}

export default Config;