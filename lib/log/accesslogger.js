"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accessLoggerMiddleware = void 0;
var log4js_1 = __importDefault(require("log4js"));
var logger_1 = require("./logger");
exports.accessLoggerMiddleware = function (options) {
    options = options || {};
    options.level = options.level || "auto";
    return log4js_1.default.connectLogger(logger_1.access, options);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjZXNzbG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWNjZXNzbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtEQUEyQjtBQUMzQixtQ0FBeUM7QUFFNUIsUUFBQSxzQkFBc0IsR0FBSSxVQUFTLE9BQVk7SUFDeEQsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUE7SUFDdkIsT0FBTyxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQTtJQUN2QyxPQUFPLGdCQUFNLENBQUMsYUFBYSxDQUFDLGVBQU0sRUFBRSxPQUFPLENBQUMsQ0FBQTtBQUNoRCxDQUFDLENBQUEifQ==