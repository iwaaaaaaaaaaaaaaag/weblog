"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.access = exports.application = exports.system = exports.console = void 0;
var log4js_1 = __importDefault(require("log4js"));
var log4js_config_1 = require("../../config/log4js.config");
log4js_1.default.configure(log4js_config_1.config);
exports.console = log4js_1.default.getLogger();
exports.system = log4js_1.default.getLogger("system");
exports.application = log4js_1.default.getLogger("application");
exports.access = log4js_1.default.getLogger("access");
//# sourceMappingURL=logger.js.map