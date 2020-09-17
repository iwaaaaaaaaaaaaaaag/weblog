import path from "path"
const ROOT = path.join(__dirname, "../")
export const config = 
{
    appenders: {
    ConsoleLogAppender: {
        type: "console"
    },
    FileLogAppender:{
        type:"file",
        filename: path.join(ROOT, "./log/system/system.log"),
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
}