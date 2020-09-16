"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var NODE_ENV = (process.env.NODE_ENV || "").trim() || "development";
var IS_DEVELOPMENT = NODE_ENV === "development";
exports.config = {
    env: {
        NODE_ENV: NODE_ENV,
        IS_DEVELOPMENT: IS_DEVELOPMENT
    },
    path: {
        root: "./",
        log: "./log",
        node_modules: "./node_modules",
        input: "./public/source",
        output: "./public/" + NODE_ENV
    },
    sass: {
        outputStyle: IS_DEVELOPMENT ? "expanded" : "compressed"
    },
    uglify: {},
};
//# sourceMappingURL=config.js.map