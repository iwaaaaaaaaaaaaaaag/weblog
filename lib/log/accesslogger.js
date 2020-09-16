"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.accesslogger = void 0;
var logger_1 = require("./logger");
var log4js_1 = __importDefault(require("log4js"));
function accesslogger(options) {
    options = options || {};
    options.level = options.level || "auto";
    return log4js_1.default.connectLogger(logger_1.access, options);
}
exports.accesslogger = accesslogger;
//# sourceMappingURL=accesslogger.js.map