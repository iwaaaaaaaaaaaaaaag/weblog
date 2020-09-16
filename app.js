"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var index_1 = require("./routes/index");
var posts_1 = require("./routes/posts");
var search_1 = require("./routes/search");
var acconut_1 = require("./routes/acconut");
var logger_1 = require("./lib/log/logger");
var systemlogger_1 = require("./lib/log/systemlogger");
var accesslogger_1 = require("./lib/log/accesslogger");
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
app.disable("x-powered-by");
//フロント側を設定
app.set("view engine", "ejs");
//静的資源を設定
// public/development配下をpublicに置き換える
//右のパスを左のパスに変更する
app.use("/public", express_1.default.static(__dirname + "/public/" + (process.env.NODE_ENV === "development" ? "development" : "production")));
// 全パスに対してaccessloggerを適応する（静的ファイルへのアクセスログは出力されない）
app.use(accesslogger_1.accesslogger());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
// ./配下に対してrouterを適応する
app.use("/", index_1.router);
app.use("/posts/", posts_1.router);
app.use("/search/", search_1.router);
app.use("/account/", acconut_1.router);
// 全パスに対してsystemloggerを適応する
app.use(systemlogger_1.systemlogger());
logger_1.application.addContext("key", "test");
logger_1.application.error("message");
app.listen(3000);
//# sourceMappingURL=app.js.map