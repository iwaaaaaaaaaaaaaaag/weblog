"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
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
            maxLogsize: 50000000,
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
        default: {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nNGpzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZzRqcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsOENBQXVCO0FBQ3ZCLElBQU0sSUFBSSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO0FBQzNCLFFBQUEsTUFBTSxHQUNuQjtJQUNJLFNBQVMsRUFBRTtRQUNYLGtCQUFrQixFQUFFO1lBQ2hCLElBQUksRUFBRSxTQUFTO1NBQ2xCO1FBQ0QsZUFBZSxFQUFDO1lBQ1osSUFBSSxFQUFDLE1BQU07WUFDWCxRQUFRLEVBQUUsY0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUseUJBQXlCLENBQUM7WUFDcEQsVUFBVSxFQUFFLFFBQVE7WUFDcEIsTUFBTSxFQUFFLEVBQUU7U0FDYjtRQUNELG9CQUFvQixFQUFDO1lBQ2pCLElBQUksRUFBRSxXQUFXO1lBQ2pCLElBQUksRUFBRSxjQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxvQkFBb0IsQ0FBQztZQUMzQyxRQUFRLEVBQUUsS0FBSztZQUNmLFNBQVMsRUFBRSxNQUFNO1NBQ3BCO1FBQ0QsMEJBQTBCLEVBQUU7WUFDeEIsSUFBSSxFQUFFLFVBQVU7WUFDaEIsUUFBUSxFQUFFLGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLHlCQUF5QixDQUFDO1lBQ3BELE9BQU8sRUFBRSxXQUFXO1lBQ3BCLFVBQVUsRUFBRSxFQUFFO1NBQ2pCO0tBQ0E7SUFDRCxVQUFVLEVBQUU7UUFDUixPQUFPLEVBQUU7WUFDTCxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztZQUNqQyxLQUFLLEVBQUUsS0FBSztTQUNmO1FBQ0QsTUFBTSxFQUFFO1lBQ0osU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUM7WUFDOUIsS0FBSyxFQUFFLE9BQU87U0FDakI7UUFDRCxXQUFXLEVBQUM7WUFDUixTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxLQUFLLEVBQUUsT0FBTztTQUNqQjtRQUNELE1BQU0sRUFBRTtZQUNKLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1lBQ3pDLEtBQUssRUFBRSxNQUFNO1NBQ2hCO0tBQ0o7Q0FDSixDQUFBIn0=