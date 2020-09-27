"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_config_1 = require("./config/app.config");
var accountcontrol_1 = require("./lib/security/accountcontrol");
var express_1 = __importDefault(require("express"));
var index_1 = require("./routes/index");
var posts_1 = require("./routes/posts");
var search_1 = require("./routes/search");
var account_1 = require("./routes/account");
var posts_2 = require("./api/posts");
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var express_session_1 = __importDefault(require("express-session"));
var logger_1 = require("./lib/log/logger");
var systemlogger_1 = require("./lib/log/systemlogger");
var accesslogger_1 = require("./lib/log/accesslogger");
var connect_flash_1 = __importDefault(require("connect-flash"));
var app = express_1.default();
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
app.use(connect_flash_1.default());
app.use.apply(app, accountcontrol_1.initialize());
//routerを設定
app.use("/api", (function (_) {
    var router = express_1.default.Router();
    router.use("/posts/", posts_2.router);
    return router;
})());
app.use("/", (function (_) {
    var router = express_1.default.Router();
    router.use(function (req, res, next) {
        res.setHeader("X-Frame-Option", "SAMEORIGIN");
        next();
    });
    router.use("/posts/", posts_1.router);
    router.use("/search/", search_1.router);
    router.use("/account/", account_1.router);
    router.use("/", index_1.router);
    return router;
})());
//システムログを設定する
app.use(systemlogger_1.systemLoggerMiddleware());
logger_1.application.addContext("key", "test");
logger_1.application.error("message");
//パスがヒットしなかったらここが呼ばれる
app.use(function (req, res, next) {
    var data = {
        method: req.method,
        protocol: req.protocol,
        version: req.httpVersion,
        url: req.url
    };
    res.status(404);
    if (req.xhr) {
        res.json(data);
    }
    else {
        res.render("./404.ejs", { data: data });
    }
});
//最後の例外処理
app.use(function (err, req, res, next) {
    var data = {
        method: req.method,
        protocol: req.protocol,
        version: req.httpVersion,
        url: req.url,
        error: (process.env.NODE_ENV === "development") ? {
            name: err.name,
            message: err.message,
            stack: err.stack
        } : undefined
    };
    res.status(500);
    if (req.xhr) {
        res.json(data);
    }
    else {
        res.render("./500.ejs", { data: data });
    }
});
app.listen(3000);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTBDO0FBQzFDLGdFQUF3RDtBQUN4RCxvREFBNkI7QUFDN0Isd0NBQW9EO0FBQ3BELHdDQUFvRDtBQUNwRCwwQ0FBc0Q7QUFDdEQsNENBQXdEO0FBQ3hELHFDQUErQztBQUUvQyw0REFBb0M7QUFDcEMsZ0VBQXdDO0FBQ3hDLG9FQUFxQztBQUNyQywyQ0FBMkY7QUFDM0YsdURBQTZEO0FBQzdELHVEQUE2RDtBQUM3RCxnRUFBaUM7QUFFakMsSUFBTSxHQUFHLEdBQUcsaUJBQU8sRUFBRSxDQUFBO0FBQ3JCLEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFBO0FBQzdCLEdBQUcsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUE7QUFFM0IsV0FBVztBQUNYLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLGlCQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxVQUFVLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBRXBJLGFBQWE7QUFDYixHQUFHLENBQUMsR0FBRyxDQUFDLHFDQUFzQixFQUFFLENBQUMsQ0FBQTtBQUVqQyxHQUFHLENBQUMsR0FBRyxDQUFDLHVCQUFZLEVBQUUsQ0FBQyxDQUFBO0FBQ3ZCLEdBQUcsQ0FBQyxHQUFHLENBQUMseUJBQU8sQ0FBQztJQUNaLE1BQU0sRUFBRSxtQkFBTSxDQUFDLFFBQVEsQ0FBQyxjQUFjO0lBQ3RDLE1BQU0sRUFBRSxLQUFLO0lBQ2IsaUJBQWlCLEVBQUUsSUFBSTtJQUN2QixJQUFJLEVBQUUsS0FBSztDQUNkLENBQUMsQ0FBQyxDQUFBO0FBRUgsR0FBRyxDQUFDLEdBQUcsQ0FBQyxxQkFB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