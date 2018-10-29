// //import { SetUp, Boot } from "./start/config";
// import * as Logger from 'bunyan';

// export class LoggerFactory {
//     public create() : Logger {
//         const options: Logger.LoggerOptions = {
//             name: "hello",
//             streams: [{
//                 type: 'rotating-file',
//                 path: 'logs/info.log',
//                 period: '1d',
//                 level: 'info',
//                 count: 3
//             },
//             {
//                 type: 'rotating-file',
//                 path: 'logs/error.log',
//                 period: '1d',
//                 level: 'error',
//                 count: 7
//             }, 
//             {
//                 type: 'rotating-file',
//                 path: 'logs/trace.log',
//                 period: '1d',
//                 level: 'trace',
//                 count: 3
//             },
//             {
//                 level: 'info',
//                 stream: process.stdout 
//             }]
//         };
        
//         return Logger.createLogger(options);
//     }
// }