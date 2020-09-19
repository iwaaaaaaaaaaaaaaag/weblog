"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = require("./routes/index");
var posts_1 = require("./routes/posts");
var search_1 = require("./routes/search");
var account_1 = require("./routes/account");
var body_parser_1 = __importDefault(require("body-parser"));
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
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
//routerを設定
app.use("/", index_1.router);
app.use("/posts/", posts_1.router);
app.use("/search/", search_1.router);
app.use("/account/", account_1.router);
//システムログを設定する
app.use(systemlogger_1.systemLoggerMiddleware());
logger_1.application.addContext("key", "test");
logger_1.application.error("message");
app.listen(3000);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsb0RBQTZCO0FBQzdCLHdDQUFvRDtBQUNwRCx3Q0FBb0Q7QUFDcEQsMENBQXNEO0FBQ3RELDRDQUF3RDtBQUN4RCw0REFBb0M7QUFDcEMsSUFBTSxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFBO0FBQ3JCLDJDQUEyRjtBQUMzRix1REFBNkQ7QUFDN0QsdURBQTZEO0FBRzdELEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFBO0FBQzdCLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUE7QUFFM0IsV0FBVztBQUNYLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLGlCQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBRXBJLGFBQWE7QUFDYixHQUFHLENBQUMsR0FBRyxDQUFDLHFDQUFzQixFQUFFLENBQUMsQ0FBQTtBQUVqQyxHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsVUFBVSxDQUFDLEVBQUMsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQTtBQUNoRCxHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUcxQixXQUFXO0FBQ1gsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsY0FBVyxDQUFFLENBQUE7QUFDMUIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsY0FBVyxDQUFFLENBQUE7QUFDaEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsZUFBWSxDQUFFLENBQUE7QUFDbEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsZ0JBQWEsQ0FBRSxDQUFBO0FBRXBDLGFBQWE7QUFDYixHQUFHLENBQUMsR0FBRyxDQUFDLHFDQUFzQixFQUFFLENBQUMsQ0FBQTtBQUVqQyxvQkFBaUIsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQzFDLG9CQUFpQixDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUNsQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBIn0=