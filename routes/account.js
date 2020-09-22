"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var mongodb_config_1 = require("../config/mongodb.config");
var mongodb_1 = __importDefault(require("mongodb"));
var csrf_1 = __importDefault(require("csrf"));
var tokens = new csrf_1.default();
exports.router = express_1.default();
function createRegistData(body) {
    var datetime = new Date();
    return {
        url: body.url,
        published: datetime,
        update: datetime,
        title: body.title,
        content: body.content,
        keywords: (body.keywords || "").split(","),
        authors: (body.authors || "").split(","),
    };
}
function validateRegistData(body) {
    var isValidated = true;
    var errors = {
        url: "",
        title: ""
    };
    if (!body.url) {
        isValidated = false;
        errors.url = "URLが未入力です。'/'から始まるURLを入力してください。";
    }
    if (body.url && /^\//.test(body.url) === false) {
        isValidated = false;
        errors.url = "'/'から始まるURLを入力してください。";
    }
    if (!body.title) {
        isValidated = false;
        errors.title = "タイトルが未入力です。任意のタイトルを入力してください。";
    }
    return isValidated ? undefined : errors;
}
exports.router.get("/", function (req, res) {
    res.render("./account/index.ejs");
});
exports.router.get("/posts/regist", function (req, res) {
    tokens.secret(function (error, secret) {
        //シークレット(サーバサイド)、クッキー(クライアントサイド)を作成
        var token = tokens.create(secret);
        req.session._csrf = secret;
        res.cookie("_csrf", token);
        res.render("./account/posts/regist-form.ejs");
    });
});
exports.router.post("/posts/regist/input", function (req, res) {
    var original = createRegistData(req.body);
    res.render("./account/posts/regist-form.ejs", { original: original });
});
exports.router.post("/posts/regist/confirm", function (req, res) {
    var original = createRegistData(req.body);
    var errors = validateRegistData(req.body);
    if (errors) {
        res.render("./account/posts/regist-form.ejs", { errors: errors, original: original });
        return;
    }
    res.render("./account/posts/regist-confirm.ejs", { original: original });
});
exports.router.post("/posts/regist/execute", function (req, res) {
    var secret = req.session._csrf;
    var token = req.cookies._csrf;
    if (tokens.verify(secret, token) === false) {
        throw new Error("Invalid Token.");
    }
    var original = createRegistData(req.body);
    var errors = validateRegistData(req.body);
    if (errors) {
        res.render("./account/posts/regist-form.ejs", { errors: errors, original: original });
        return;
    }
    mongodb_1.default.connect(mongodb_config_1.config.CONNECTION_URL, mongodb_config_1.config.OPTIONS, function (error, client) {
        var db = client.db(mongodb_config_1.config.DATABASE);
        db.collection("posts")
            .insertOne(original)
            .then(function () {
            //シークレット(サーバサイド)、クッキー(クライアントサイド)を削除
            delete req.session._csrf;
            res.clearCookie("_csrf");
            res.redirect("/account/posts/regist/complete");
        }).catch(function (error) {
            throw error;
        }).then(function () {
            client.close();
        });
    });
});
exports.router.get("/posts/regist/complete", function (req, res) {
    res.render("./account/posts/regist-complete.ejs");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0RBQTRCO0FBRTVCLDJEQUErQztBQUMvQyxvREFBaUM7QUFDakMsOENBQXlCO0FBQ3pCLElBQU0sTUFBTSxHQUFHLElBQUksY0FBTSxFQUFFLENBQUE7QUFFZCxRQUFBLE1BQU0sR0FBRyxpQkFBTSxFQUFFLENBQUE7QUFFOUIsU0FBUyxnQkFBZ0IsQ0FBRyxJQUFVO0lBQ2xDLElBQU0sUUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7SUFDM0IsT0FBTztRQUNILEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztRQUNiLFNBQVMsRUFBRSxRQUFRO1FBQ25CLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztRQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87UUFDckIsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQzFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztLQUMzQyxDQUFBO0FBQ0wsQ0FBQztBQUVELFNBQVMsa0JBQWtCLENBQUUsSUFBVTtJQUNuQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUE7SUFDdEIsSUFBSSxNQUFNLEdBQUc7UUFDVCxHQUFHLEVBQUMsRUFBRTtRQUNOLEtBQUssRUFBQyxFQUFFO0tBQ1gsQ0FBQTtJQUVELElBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1YsV0FBVyxHQUFHLEtBQUssQ0FBQTtRQUNuQixNQUFNLENBQUMsR0FBRyxHQUFHLGlDQUFpQyxDQUFBO0tBQ2pEO0lBRUQsSUFBRyxJQUFJLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMs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