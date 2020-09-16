"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
//[2020-09-11T23:16:47.465] [INFO] default - メッセージ
var path_1 = __importDefault(require("path"));
var ROOT = path_1.default.join(__dirname, "../");
exports.config = {
    appenders: {
        ConsoleLogAppender: {
            type: "console"
        },
        FileLogAppender: {
            type: "file",
            filename: path_1.default.join(ROOT, "./log/system/system.log"),
            maxLogSize: 5000000,
            backup: 10
        },
        MultiFileLogAppender: {
            type: "multiFile",
            base: path_1.default.join(ROOT, "./log/application/"),
            property: "key",
            extension: ".log"
        },
        DateRollingFileLogAppender: {
            type: "dateFile",
            filename: path_1.default.join(ROOT, "./log/access/access.log"),
            pattern: "-yyyyMMdd",
            daysToKeep: 30
        }
    },
    categories: {
        "default": {
            appenders: ["ConsoleLogAppender"],
            level: "ALL"
        },
        system: {
            appenders: ["FileLogAppender"],
            level: "ERROR"
        },
        application: {
            appenders: ["MultiFileLogAppender"],
            level: "ERROR"
        },
        access: {
            appenders: ["DateRollingFileLogAppender"],
            level: "INFO"
        }
    }
};
//# sourceMappingURL=log4js.config.js.map