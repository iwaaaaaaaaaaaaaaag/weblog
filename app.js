"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_config_1 = require("./config/app.config");
var express_1 = __importDefault(require("express"));
var index_1 = require("./routes/index");
var posts_1 = require("./routes/posts");
var search_1 = require("./routes/search");
var account_1 = require("./routes/account");
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var express_session_1 = __importDefault(require("express-session"));
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
app.use(cookie_parser_1.default());
app.use(express_session_1.default({
    secret: app_config_1.config.security.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    name: "sid"
}));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUMsa0RBQTBDO0FBQzNDLG9EQUE2QjtBQUM3Qix3Q0FBb0Q7QUFDcEQsd0NBQW9EO0FBQ3BELDBDQUFzRDtBQUN0RCw0Q0FBd0Q7QUFDeEQsNERBQW9DO0FBQ3BDLGdFQUF3QztBQUN4QyxvRUFBcUM7QUFDckMsSUFBTSxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFBO0FBQ3JCLDJDQUEyRjtBQUMzRix1REFBNkQ7QUFDN0QsdURBQTZEO0FBRzdELEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFBO0FBQzdCLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUE7QUFFM0IsV0FBVztBQUNYLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLGlCQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBRXBJLGFBQWE7QUFDYixHQUFHLENBQUMsR0FBRyxDQUFDLHFDQUFzQixFQUFFLENBQUMsQ0FBQTtBQUVqQyxHQUFHLENBQUMsR0FBRyxDQUFDLHVCQUFZLEVBQUUsQ0FBQyxDQUFBO0FBQ3ZCLEdBQUcsQ0FBQyxHQUFHLENBQUMseUJBQU8sQ0FBQztJQUNaLE1BQU0sRUFBRSxtQkFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjO0lBQ3RDLE1BQU0sRUFBRSxLQUFLO0lBQ2IsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QixJQUFJLEVBQUUsS0FBSztDQUNkLENBQUMsQ0FBQyxDQUFBO0FBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxQkFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUE7QUFDaEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxQkFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7QUFFMUIsV0FBVztBQUNYLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGNBQVcsQ0FBRSxDQUFBO0FBQzFCLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLGNBQVcsQ0FBRSxDQUFBO0FBQ2hDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLGVBQVksQ0FBRSxDQUFBO0FBQ2xDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLGdCQUFhLENBQUUsQ0FBQTtBQUVwQyxhQUFhO0FBQ2IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxQ0FBc0IsRUFBRSxDQUFDLENBQUE7QUFFakMsb0JBQWlCLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBQyxNQUFNLENBQUMsQ0FBQTtBQUMxQyxvQkFBaUIsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUE7QUFDbEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQSJ9