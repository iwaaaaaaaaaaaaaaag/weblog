"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var mongodb_config_1 = require("../config/mongodb.config");
var app_config_1 = require("../config/app.config");
var express_1 = __importDefault(require("express"));
exports.router = express_1.default();
var mongodb_1 = require("mongodb");
var MAX_TIME_PER_PAGE = app_config_1.search.search.MAX_ITEM_PER_PAGE;
exports.router.get("/", function (req, res) {
    var page = req.query.page ? parseInt(req.query.page) : 1;
    var keyword = req.query.keyword || "";
    var regexp = new RegExp(".*" + keyword + ".*");
    var query = {
        $or: [{ title: regexp }, { content: regexp }]
    };
    mongodb_1.MongoClient.connect(mongodb_config_1.config.CONNECTION_URL, mongodb_config_1.config.OPTIONS, function (error, client) {
        var db = client.db(mongodb_config_1.config.DATABASE);
        Promise.all([
            db.collection("posts")
                .find(query)
                .count(),
            db.collection("posts")
                .find(query)
                .sort({ published: -1 })
                .skip((page - 1) * MAX_TIME_PER_PAGE)
                .limit(MAX_TIME_PER_PAGE)
                .toArray()
        ])
            .then(function (results) {
            var data = {
                keyword: keyword,
                count: results[0],
                list: results[1],
                pagination: {
                    max: Math.ceil(results[0] / MAX_TIME_PER_PAGE),
                    current: page
                }
            };
            res.render("./search/list.ejs", data);
        }).catch(function (error) {
            throw error;
        }).then(function () {
            client.close();
        });
    });
});
//# sourceMappingURL=search.js.map