"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Error {
    constructor(message, error, callback) {
        this.log = () => {
            console.error(`${this.error}, ${Error.timeStamp()}`);
            console.error(this.message);
            if (this.callback)
                return this.callback();
        };
        this.logAndExit = () => {
            console.error(`${this.error}, ${Error.timeStamp()}`);
            console.error(this.message);
            return process.exit(1);
        };
        this.message = message;
        this.error = error;
        this.callback = callback;
    }
}
Error.timeStamp = () => `${new Date().toString()}`;
exports.default = Error;
