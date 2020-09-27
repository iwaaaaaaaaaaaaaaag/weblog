"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.digest = void 0;
var app_config_1 = require("../../config/app.config");
var crypto_1 = __importDefault(require("crypto"));
exports.digest = function (text) {
    text += app_config_1.config.security.PASSWORD_SALT;
    for (var i = 0; i < app_config_1.config.security.PASSWORD_STRETCH; i++) {
        var hash = crypto_1.default.createHash("sha256");
        hash.update(text);
        text = hash.digest("hex");
        console.log(text);
    }
    return text;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0RBQThDO0FBQzlDLGtEQUEyQjtBQUVkLFFBQUEsTUFBTSxHQUFHLFVBQVUsSUFBVztJQUN2QyxJQUFJLElBQUksbUJBQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFBO0lBRXJDLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxtQkFBTSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLEVBQUUsRUFBQztRQUN4RCxJQUFNLElBQUksR0FBRyxnQkFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN4QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2pCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7S0FDakI7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDLENBQUEifQ==