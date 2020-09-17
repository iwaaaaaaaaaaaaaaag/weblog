"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemLogger = void 0;
var logger_1 = require("./logger");
exports.systemLogger = function (options) {
    return function (err, req, res, next) {
        logger_1.system.error(err.message);
        next(err);
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtbG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3lzdGVtbG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUF5QztBQUc1QixRQUFBLFlBQVksR0FBRyxVQUFTLE9BQVk7SUFDN0MsT0FBTyxVQUFTLEdBQVMsRUFBRSxHQUFPLEVBQUUsR0FBTyxFQUFFLElBQWlCO1FBQzFELGVBQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNiLENBQUMsQ0FBQTtBQUNMLENBQUMsQ0FBQSJ9