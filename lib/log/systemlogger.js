"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemLoggerMiddleware = void 0;
var logger_1 = require("./logger");
exports.systemLoggerMiddleware = function (options) {
    return function (err, req, res, next) {
        logger_1.system.error(err.message);
        next(err);
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtbG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3lzdGVtbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUF5QztBQUc1QixRQUFBLHNCQUFzQixHQUFHLFVBQVMsT0FBWTtJQUN2RCxPQUFPLFVBQVMsR0FBUyxFQUFFLEdBQU8sRUFBRSxHQUFPLEVBQUUsSUFBaUI7UUFDMUQsZUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ2IsQ0FBQyxDQUFBO0FBQ0wsQ0FBQyxDQUFBIn0=