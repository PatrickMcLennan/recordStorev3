declare class Error {
    private message;
    private error;
    private callback?;
    constructor(message: string, error: Error, callback?: Function);
    static timeStamp: () => string;
    log: () => any;
    logAndExit: () => never;
}
export default Error;
