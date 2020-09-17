"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.system = exports.console = void 0;
var log4js_1 = __importDefault(require("log4js"));
var log4js_config_1 = require("../../config/log4js.config");
log4js_1.default.configure(log4js_config_1.config);
exports.console = log4js_1.default.getLogger();
exports.system = log4js_1.default.getLogger("system");
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtEQUEyQjtBQUMzQiw0REFBaUQ7QUFFakQsZ0JBQU0sQ0FBQyxTQUFTLENBQUMsc0JBQU0sQ0FBQyxDQUFBO0FBRVgsUUFBQSxPQUFPLEdBQUcsZ0JBQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQTtBQUU1QixRQUFBLE1BQU0sR0FBRyxnQkFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQSJ9