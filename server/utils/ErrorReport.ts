class Error {
  private message: string;
  private error: Error;
  private callback?: Function;

  public constructor(message: string, error: Error, callback?: Function) {
    this.message = message;
    this.error = error;
    this.callback = callback;
  }

  static timeStamp = () => `${new Date().toString()}`;

  public log = () => {
    console.error(`${this.error}, ${Error.timeStamp()}`);
    console.error(this.message);
    if (this.callback) return this.callback();
  };

  public logAndExit = () => {
    console.error(`${this.error}, ${Error.timeStamp()}`);
    console.error(this.message);
    return process.exit(1);
  };
}

export default Error;
