export class ErrorContext {
  private error: { [key: string]: { error: boolean, message: string, data: string } } = {};
  private name: string[] = [];

  constructor(data:string[]) {
    this.name = data;
    this.setDefaultValue();
  }

  public setDefaultValue(): void {
    this.name.forEach((key) => {
      this.error[key] = { error: false, message: "", data: "" };
    });
  }

  public get(key: string): { error: boolean, message: string, data: string } {
    return this.error[key];
  }

  public getAll(): { [key: string]: { error: boolean, message: string, data: string } } {
    return this.error;
  }

  public set(key: string, {message, data}: { message: string, data: string }): void {
    this.error[key] = { error: true, message, data };
  }

  public setAll(value: { [key: string]: { error: boolean, message: string, data: string } }): void {
    this.error = value;
  }

  public clear(key?: string | null): void {
    if (key) {
      this.error[key] = { error: false, message: "", data: "" };
    } else {
      this.setDefaultValue();
    }
  }

  public isAnyError(): string[] {
    return Object.keys(this.error).filter((v) => this.error[v].error);
  }

  public isAllError(): boolean {
    return Object.values(this.error).every((v) => v.error);
  }

  public isError(key:string[]): boolean {
    return key.some((v) => this.error[v].error);
  }
}
