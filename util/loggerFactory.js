"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger = require("bunyan");
class LoggerFactory {
    create() {
        const options = {
            name: "hello",
            streams: [{
                    type: 'rotating-file',
                    path: 'logs/info.log',
                    period: '1d',
                    level: 'info',
                    count: 3
                },
                {
                    type: 'rotating-file',
                    path: 'logs/error.log',
                    period: '1d',
                    level: 'error',
                    count: 7
                },
                {
                    type: 'rotating-file',
                    path: 'logs/trace.log',
                    period: '1d',
                    level: 'trace',
                    count: 3
                },
                {
                    level: 'info',
                    stream: process.stdout
                }]
        };
        return Logger.createLogger(options);
    }
}
exports.LoggerFactory = LoggerFactory;
//# sourceMappingURL=loggerFactory.js.map