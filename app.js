"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = require("./routes/index");
var posts_1 = require("./routes/posts");
var search_1 = require("./routes/search");
var app = express_1.default();
var logger_1 = require("./lib/log/logger");
var systemlogger_1 = require("./lib/log/systemlogger");
var accesslogger_1 = require("./lib/log/accesslogger");
app.set("view engine", "ejs");
app.disable("x-powered-by");
//静的ファイルを返す
app.use("/public", express_1.default.static(__dirname + "/public/" + (process.env.NODE_ENV === "development" ? "development" : "production")));
//アクセスログを設定する
app.use(accesslogger_1.accessLoggerMiddleware());
//routerを設定
app.use("/", index_1.router);
app.use("/posts/", posts_1.router);
app.use("/search/", search_1.router);
//システムログを設定する
app.use(systemlogger_1.systemLoggerMiddleware());
logger_1.application.addContext("key", "test");
logger_1.application.error("message");
app.listen(3000);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQTZCO0FBQzdCLHdDQUFvRDtBQUNwRCx3Q0FBb0Q7QUFDcEQsMENBQXNEO0FBQ3RELElBQU0sR0FBRyxHQUFHLGlCQUFPLEVBQUUsQ0FBQTtBQUNyQiwyQ0FBMkY7QUFDM0YsdURBQTZEO0FBQzdELHVEQUE2RDtBQUc3RCxHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQTtBQUM3QixHQUFHLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0FBRTNCLFdBQVc7QUFDWCxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsVUFBVSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssYUFBYSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUVwSSxhQUFhO0FBQ2IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxQ0FBc0IsRUFBRSxDQUFDLENBQUE7QUFFakMsV0FBVztBQUNYLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGNBQVcsQ0FBRSxDQUFBO0FBQzFCLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLGNBQVcsQ0FBRSxDQUFBO0FBQ2hDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLGVBQVksQ0FBRSxDQUFBO0FBR2xDLGFBQWE7QUFDYixHQUFHLENBQUMsR0FBRyxDQUFDLHFDQUFzQixFQUFFLENBQUMsQ0FBQTtBQUVqQyxvQkFBaUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQzFDLG9CQUFpQixDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUNsQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBIn0=