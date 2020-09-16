"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var mongodb_config_1 = require("../config/mongodb.config");
var express_1 = __importDefault(require("express"));
var mongodb_1 = require("mongodb");
exports.router = express_1.default();
exports.router.get("/*", function (req, res) {
    mongodb_1.MongoClient.connect(mongodb_config_1.config.CONNECTION_URL, mongodb_config_1.config.OPTIONS, function (error, client) {
        var db = client.db(mongodb_config_1.config.DATABASE);
        db.collection("posts").findOne({
            url: req.url
        }).then(function (doc) {
            res.render("./posts/index.ejs", doc);
        }).catch(function (error) {
            throw error;
        }).then(function (_) {
            client.close();
        });
    });
});
//# sourceMappingURL=posts.js.map