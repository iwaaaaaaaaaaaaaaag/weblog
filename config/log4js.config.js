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
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nNGpzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZzRqcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsOENBQXVCO0FBQ3ZCLElBQU0sSUFBSSxHQUFHLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO0FBQzNCLFFBQUEsTUFBTSxHQUNuQjtJQUNJLFNBQVMsRUFBRTtRQUNYLGtCQUFrQixFQUFFO1lBQ2hCLElBQUksRUFBRSxTQUFTO1NBQ2xCO1FBQ0QsZUFBZSxFQUFDO1lBQ1osSUFBSSxFQUFDLE1BQU07WUFDWCxRQUFRLEVBQUUsY0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUseUJBQXlCLENBQUM7WUFDcEQsVUFBVSxFQUFFLFFBQVE7WUFDcEIsTUFBTSxFQUFFLEVBQUU7U0FDYjtLQUNBO0lBQ0QsVUFBVSxFQUFFO1FBQ1IsT0FBTyxFQUFFO1lBQ0wsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7WUFDakMsS0FBSyxFQUFFLEtBQUs7U0FDZjtRQUNELE1BQU0sRUFBRTtZQUNKLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1lBQzlCLEtBQUssRUFBRSxPQUFPO1NBQ2pCO0tBQ0o7Q0FDSixDQUFBIn0=