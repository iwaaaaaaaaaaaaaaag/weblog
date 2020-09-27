"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var accountcontrol_1 = require("../lib/security/accountcontrol");
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
exports.router.get("/", accountcontrol_1.authorize("readWrite"), function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    }
    else {
        res.redirect("./account/login");
    }
}, function (req, res) {
    res.render("./account/index.ejs");
});
exports.router.get("/login", function (req, res) {
    res.render("./account/login.ejs", { message: req.flash("message") });
});
exports.router.post("/login", accountcontrol_1.authenticate());
exports.router.post("/logout", function (req, res) {
    req.logout();
    res.redirect("/account/login");
});
exports.router.get("/posts/regist", accountcontrol_1.authorize("readWrite"), function (req, res) {
    tokens.secret(function (error, secret) {
        //シークレット(サーバサイド)、クッキー(クライアントサイド)を作成
        var token = tokens.create(secret);
        req.session._csrf = secret;
        res.cookie("_csrf", token);
        res.render("./account/posts/regist-form.ejs");
    });
});
exports.router.post("/posts/regist/input", accountcontrol_1.authorize("readWrite"), function (req, res) {
    var original = createRegistData(req.body);
    res.render("./account/posts/regist-form.ejs", { original: original });
});
exports.router.post("/posts/regist/confirm", accountcontrol_1.authorize("readWrite"), function (req, res) {
    var original = createRegistData(req.body);
    var errors = validateRegistData(req.body);
    if (errors) {
        res.render("./account/posts/regist-form.ejs", { errors: errors, original: original });
        return;
    }
    res.render("./account/posts/regist-confirm.ejs", { original: original });
});
exports.router.post("/posts/regist/execute", accountcontrol_1.authorize("readWrite"), function (req, res) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0RBQTRCO0FBQzVCLGlFQUFzRTtBQUV0RSwyREFBK0M7QUFDL0Msb0RBQWlDO0FBQ2pDLDhDQUF5QjtBQUN6QixJQUFNLE1BQU0sR0FBRyxJQUFJLGNBQU0sRUFBRSxDQUFBO0FBRWQsUUFBQSxNQUFNLEdBQUcsaUJBQU0sRUFBRSxDQUFBO0FBRTlCLFNBQVMsZ0JBQWdCLENBQUcsSUFBVTtJQUNsQyxJQUFNLFFBQVEsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFBO0lBQzNCLE9BQU87UUFDSCxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7UUFDYixTQUFTLEVBQUUsUUFBUTtRQUNuQixNQUFNLEVBQUUsUUFBUTtRQUNoQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7UUFDakIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1FBQ3JCLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUMxQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7S0FDM0MsQ0FBQTtBQUNMLENBQUM7QUFFRCxTQUFTLGtCQUFrQixDQUFFLElBQVU7SUFDbkMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFBO0lBQ3RCLElBQUksTUFBTSxHQUFHO1FBQ1QsR0FBRyxFQUFDLEVBQUU7UUFDTixLQUFLLEVBQUMsRUFBRTtLQUNYLENBQUE7SUFFRCxJQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNWLFdBQVcsR0FBRyxLQUFLLENBQUE7UUFDbkIsTUFBTSxDQUFDLEdBQUcsR0FBRyxpQ0FBaUMsQ0FBQTtLQUNqRDtJQUVELElBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxLQUFLLEVBQUc7UUFDNUMsV0FBVyxHQUFHLEtBQUssQ0FBQTtRQUNuQixNQUFNLENBQUMsR0FBRyxHQUFHLHVCQUF1QixDQUFBO0tBQ3ZDO0lBRUQsSUFBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDWixXQUFXLEdBQUcsS0FBSyxDQUFBO1FBQ25CLE1BQU0sQ0FBQyxLQUFLLEdBQUcsOEJBQThCLENBQUE7S0FDaEQ7SUFHRCxPQUFPLFdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUE7QUFFM0MsQ0FBQztBQUVELGNBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLDBCQUFTLENBQUMsV0FBVyxDQUFDLEVBQUcsVUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7SUFDcEQsSUFBRyxHQUFHLENBQUMsZUFBZSxFQUFFLEVBQUU7UUFDdEIsSUFBSSxFQUFFLENBQUE7S0FDVDtTQUFNO1FBQ0gsR0FBRyxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0tBQ2xDO0FBQ0wsQ0FBQyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLENBQUE7QUFDckMsQ0FBQyxDQUFDLENBQUE7QUFFRixjQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQzFCLEdBQUcsQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsRUFBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLENBQUE7QUFDdEUsQ0FBQyxDQUFDLENBQUE7QUFFRixjQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSw2QkFBWSxFQUFFLENBQUMsQ0FBQTtBQUVyQyxjQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO0lBQzVCLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQTtJQUNaLEdBQUcsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtBQUNsQyxDQUFDLENBQUMsQ0FBQTtBQUVGLGNBQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLDBCQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztJQUN6RCxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsS0FBSyxFQUFFLE1BQU07UUFDeEIsbUNBQW1DO1FBQ25DLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDbkMsR0FBRyxDQUFDLE9BQVEsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFBO1FBQzNCLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBRTFCLEdBQUcsQ0FBQyxNQUFNLENBQUMsaUNBQWlDLENBQUMsQ0FBQTtJQUVqRCxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBO0FBRUYsY0FBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSwwQkFBUyxDQUFDLFdBQVcsQ0FBQyxFQUFDLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFDL0QsSUFBTSxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsaUNBQWlDLEVBQUUsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDLENBQUE7QUFDL0QsQ0FBQyxDQUFDLENBQUE7QUFFRixjQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLDBCQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztJQUNsRSxJQUFNLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDM0MsSUFBTSxNQUFNLEdBQUcsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzNDLElBQUcsTUFBTSxFQUFDO1FBQ04sR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQ0FBaUMsRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUMsQ0FBQTtRQUNuRSxPQUFNO0tBQ1Q7SUFDRCxHQUFHLENBQUMsTUFBTSxDQUFDLG9DQUFvQyxFQUFFLEVBQUMsUUFBUSxVQUFBLEVBQUMsQ0FBQyxDQUFBO0FBQ2hFLENBQUMsQ0FBQyxDQUFBO0FBRUYsY0FBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSwwQkFBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFDbEUsSUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLE9BQVEsQ0FBQyxLQUFLLENBQUE7SUFDakMsSUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUE7SUFFL0IsSUFBRyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxLQUFLLEVBQUU7UUFDdkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0tBQ3BDO0lBRUQsSUFBTSxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzNDLElBQU0sTUFBTSxHQUFHLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUUzQyxJQUFHLE1BQU0sRUFBQztRQUNOLEdBQUcsQ0FBQyxNQUFNLENBQUMsaUNBQWlDLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDLENBQUE7UUFDbkUsT0FBTTtLQUNUO0lBRUQsaUJBQVcsQ0FBQyxPQUFPLENBQUMsdUJBQU0sQ0FBQyxjQUFjLEVBQUUsdUJBQU0sQ0FBQyxPQUFPLEVBQUUsVUFBQyxLQUFLLEVBQUUsTUFBTTtRQUNyRSxJQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLHVCQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDckMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7YUFDckIsU0FBUyxDQUFDLFFBQVEsQ0FBQzthQUNuQixJQUFJLENBQUM7WUFDRixtQ0FBbUM7WUFDbkMsT0FBTyxHQUFHLENBQUMsT0FBUSxDQUFDLEtBQUssQ0FBQTtZQUN6QixHQUFHLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBQ3hCLEdBQUcsQ0FBQyxRQUFRLENBQUMsZ0NBQWdDLENBQUMsQ0FBQTtRQUNsRCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxLQUE0QjtZQUNsQyxNQUFNLEtBQUssQ0FBQTtRQUNmLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNKLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNsQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0FBRU4sQ0FBQyxDQUFDLENBQUE7QUFFRixjQUFNLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7SUFDMUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFBO0FBQ3JELENBQUMsQ0FBQyxDQUFBIn0=