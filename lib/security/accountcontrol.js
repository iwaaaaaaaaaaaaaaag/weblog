"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = exports.authenticate = exports.initialize = void 0;
var mongodb_config_1 = require("../../config/mongodb.config");
var hash_1 = require("./hash");
var passport_1 = __importDefault(require("passport"));
var passport_local_1 = require("passport-local");
var mongodb_1 = __importDefault(require("mongodb"));
//クライアント側にデータ(SID)を返す時に呼ばれる
//ログイン時に呼ばれる
//emailをcookieのSIDに埋め込んで返す
passport_1.default.serializeUser(function (email, done) {
    done(null, email);
});
//クライアントからデータ(SIDの復元)を貰うときに呼ばれる
//SIDから復元できなかった場合は呼ばれない
//画面遷移する度に呼ばれる
//done(null, user)を実行したらreq.userにパラメータが格納される
passport_1.default.deserializeUser(function (email, done) {
    mongodb_1.default.connect(mongodb_config_1.config.CONNECTION_URL, mongodb_config_1.config.OPTIONS, function (error, client) {
        var db = client.db(mongodb_config_1.config.DATABASE);
        db.collection("users")
            .findOne({ email: email })
            .then(function (user) {
            return new Promise(function (resolve, reject) {
                db.collection("privileges")
                    .findOne({ role: user.role })
                    .then(function (privilege) {
                    user.permissions = privilege.permissions; //ユーザが持っているロールに対して権限を付与する
                    resolve(user);
                }).catch(function (error) {
                    reject(error);
                });
            });
        })
            .then(function (user) {
            done(null, user); //req.userにパラメータが格納される
        }).catch(function (error) {
            done(error);
        }).then(function () {
            client.close();
        });
    });
});
//初回ろぐいん時に呼ばれる
passport_1.default.use("local-strategy", new passport_local_1.Strategy({
    usernameField: "username",
    passwordField: "password",
    passReqToCallback: true,
}, function (req, username, password, done) {
    mongodb_1.default.connect(mongodb_config_1.config.CONNECTION_URL, mongodb_config_1.config.OPTIONS, function (error, client) {
        var db = client.db(mongodb_config_1.config.DATABASE);
        db.collection("users").findOne({
            email: username,
            password: hash_1.digest(password)
        }).then(function (user) {
            var _a;
            if (user) {
                (_a = req.session) === null || _a === void 0 ? void 0 : _a.regenerate(function (error) {
                    done(null, user.email);
                });
            }
            else {
                done(null, false, req.flash("message", "ユーザー名 または パスワードが違います"));
            }
        }).catch(function (error) {
            done(error);
        }).then(function () {
            client.close();
        });
    });
}));
exports.initialize = function () {
    return [
        passport_1.default.initialize(),
        passport_1.default.session(),
        function (req, res, next) {
            if (req.user) {
                res.locals.user = req.user; //ejsにデータを設定可能
            }
            next();
        }
    ];
};
exports.authenticate = function () {
    return passport_1.default.authenticate("local-strategy", {
        successRedirect: "/account/",
        failureRedirect: "/account/login"
    });
};
exports.authorize = function (privilege) {
    return function (req, res, next) {
        if (req.isAuthenticated() &&
            (req.user.permissions || []).indexOf(privilege) >= 0) {
            next();
        }
        else {
            res.redirect("/account/login");
        }
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudGNvbnRyb2wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY2NvdW50Y29udHJvbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw4REFBa0Q7QUFDbEQsK0JBQTZCO0FBQzdCLHNEQUErQjtBQUMvQixpREFBdUM7QUFDdkMsb0RBQWlDO0FBSWpDLDJCQUEyQjtBQUMzQixZQUFZO0FBQ1osMEJBQTBCO0FBQzFCLGtCQUFRLENBQUMsYUFBYSxDQUFDLFVBQUMsS0FBWSxFQUFDLElBQUk7SUFDckMsSUFBSSxDQUFDLElBQUksRUFBQyxLQUFLLENBQUMsQ0FBQTtBQUNwQixDQUFDLENBQUMsQ0FBQTtBQUVGLCtCQUErQjtBQUMvQix1QkFBdUI7QUFDdkIsY0FBYztBQUNkLDRDQUE0QztBQUM1QyxrQkFBUSxDQUFDLGVBQWUsQ0FBQyxVQUFDLEtBQUssRUFBQyxJQUFJO0lBQ2hDLGlCQUFXLENBQUMsT0FBTyxDQUFDLHVCQUFNLENBQUMsY0FBYyxFQUFFLHVCQUFNLENBQUMsT0FBTyxFQUFFLFVBQUMsS0FBSyxFQUFFLE1BQU07UUFDckUsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyx1QkFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3JDLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO2FBQ3JCLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQzthQUN4QixJQUFJLENBQUMsVUFBQyxJQUF1QjtZQUMxQixPQUFPLElBQUksT0FBTyxDQUFvQixVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUNsRCxFQUFFLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQztxQkFDeEIsT0FBTyxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQztxQkFDMUIsSUFBSSxDQUFDLFVBQUMsU0FBMEI7b0JBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQSxDQUFBLHlCQUF5QjtvQkFDakUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNqQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxLQUE0QjtvQkFDbEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUNqQixDQUFDLENBQUMsQ0FBQTtZQUNKLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDO2FBQ0wsSUFBSSxDQUFDLFVBQUMsSUFBc0I7WUFDekIsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFDLHNCQUFzQjtRQUMzQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxLQUE2QjtZQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDZixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDSixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDbEIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBO0FBRUYsY0FBYztBQUNkLGtCQUFRLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUM3QixJQUFJLHlCQUFRLENBQUM7SUFDVCxhQUFhLEVBQUUsVUFBVTtJQUN6QixhQUFhLEVBQUUsVUFBVTtJQUN6QixpQkFBaUIsRUFBRSxJQUFJO0NBQ3RCLEVBQUUsVUFBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJO0lBQzdCLGlCQUFXLENBQUMsT0FBTyxDQUFDLHVCQUFNLENBQUMsY0FBYyxFQUFFLHVCQUFNLENBQUMsT0FBTyxFQUFFLFVBQUMsS0FBSyxFQUFFLE1BQU07UUFDakUsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyx1QkFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3JDLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQzNCLEtBQUssRUFBRSxRQUFRO1lBQ2YsUUFBUSxFQUFFLGFBQU0sQ0FBQyxRQUFRLENBQUM7U0FDN0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQWU7O1lBQ3BCLElBQUcsSUFBSSxFQUFDO2dCQUNKLE1BQUEsR0FBRyxDQUFDLE9BQU8sMENBQUUsVUFBVSxDQUFDLFVBQUMsS0FBSztvQkFDMUIsSUFBSSxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ3pCLENBQUMsRUFBQzthQUNMO2lCQUFJO2dCQUNELElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLHNCQUFzQixDQUFDLENBQUMsQ0FBQTthQUNsRTtRQUNMLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEtBQUs7WUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDZixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDSixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDbEIsQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDLENBQ0osQ0FBQTtBQUNMLENBQUMsQ0FDSixDQUNBLENBQUE7QUFFWSxRQUFBLFVBQVUsR0FBRztJQUN0QixPQUFPO1FBQ0gsa0JBQVEsQ0FBQyxVQUFVLEVBQUU7UUFDckIsa0JBQVEsQ0FBQyxPQUFPLEVBQUU7UUFDbEIsVUFBVSxHQUFPLEVBQUUsR0FBTyxFQUFFLElBQVE7WUFDaEMsSUFBRyxHQUFHLENBQUMsSUFBSSxFQUFFO2dCQUNULEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUEsQ0FBQyxjQUFjO2FBQzVDO1lBQ0QsSUFBSSxFQUFFLENBQUE7UUFDVixDQUFDO0tBQ0osQ0FBQTtBQUNMLENBQUMsQ0FBQTtBQUVZLFFBQUEsWUFBWSxHQUFHO0lBQ3hCLE9BQU8sa0JBQVEsQ0FBQyxZQUFZLENBQ3hCLGdCQUFnQixFQUFFO1FBQ2QsZUFBZSxFQUFFLFdBQVc7UUFDNUIsZUFBZSxFQUFFLGdCQUFnQjtLQUNwQyxDQUNKLENBQUE7QUFDTCxDQUFDLENBQUE7QUFFWSxRQUFBLFNBQVMsR0FBRyxVQUFTLFNBQWdCO0lBQzlDLE9BQU8sVUFBUyxHQUFPLEVBQUMsR0FBTyxFQUFDLElBQVE7UUFDcEMsSUFBRyxHQUFHLENBQUMsZUFBZSxFQUFFO1lBQ3hCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUVsRCxJQUFJLEVBQUUsQ0FBQTtTQUNUO2FBQU07WUFDSCxHQUFHLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUE7U0FDakM7SUFDRCxDQUFDLENBQUE7QUFDVCxDQUFDLENBQUEifQ==