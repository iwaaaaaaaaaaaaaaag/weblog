"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
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
        authors: (body.keywords || "").split(",")
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
        errors.url = "URLが未入力です。'/'から始まるURLを入力してください";
    }
    if (body.url && /^\//.test(body.url) === false) {
        isValidated = false;
        errors.url = "'/'から始まるURLを入力してください";
    }
    if (!body.title) {
        isValidated = false;
        errors.title = "タイトルが未入力です。任意のタイトルを入力してください";
    }
    return isValidated ? undefined : errors;
}
exports.router.get("/", function (req, res) {
    res.render("./account/index.ejs");
});
exports.router.get("/posts/regist", function (req, res) {
    res.render("./account/posts/regist-form.ejs");
});
exports.router.get("/posts/regist/input", function (req, res) {
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
    res.render("./account/posts/regist-comfirm.ejs", { original: original });
});
//# sourceMappingURL=acconut.js.map