"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemlogger = void 0;
var logger_1 = require("./logger");
function systemlogger(options) {
    return function (err, req, res, next) {
        logger_1.system.error(err.message);
        next(err);
    };
}
exports.systemlogger = systemlogger;
//# sourceMappingURL=systemlogger.js.map