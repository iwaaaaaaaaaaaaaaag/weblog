"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_config_1 = require("../../config/mongodb.config");
var mongodb_1 = __importDefault(require("mongodb"));
// posts, users, privileges
function insertPosts(db) {
    return Promise.all([
        db.collection("posts").insertMany([
            {
                url: "/2017/07/advanced-nodejs.html",
                published: new Date(2017, 7, 8),
                updated: new Date(2017, 7, 8),
                title: "Node.js 応用",
                content: "Node.jsでExcelのファイルが触れるなんて！",
                keywords: ["Node.js"],
                authors: ["Yuta Sato"],
            },
            {
                url: "/2017/08/advanced-nodejs.html",
                published: new Date(2017, 7, 8),
                updated: new Date(2017, 7, 8),
                title: "Node.js 応用",
                content: "Node.jsでExcelのファイルが触れるなんて！",
                keywords: ["Node.js"],
                authors: ["Yuta Sato"],
            },
            {
                url: "/2017/09/advanced-nodejs.html",
                published: new Date(2017, 7, 8),
                updated: new Date(2017, 7, 8),
                title: "Node.js 応用",
                content: "Node.jsでExcelのファイルが触れるなんて！",
                keywords: ["Node.js"],
                authors: ["Yuta Sato"],
            }
        ]),
        db.collection("posts").createIndex({ url: 1 }, { unique: true, background: true })
    ]);
}
function insertUsers(db) {
    return Promise.all([
        db.collection("users").insertMany([
            {
                email: "yuta.sato@sample.com",
                name: "Yuta Sato",
                password: "test",
                role: "owner"
            }
        ]),
        db.collection("users").createIndex({ email: 1 }, { unique: true, background: true })
    ]);
}
function insertPrivileges(db) {
    return Promise.all([
        db.collection("privileges").insertMany([
            {
                role: "default",
                permissions: ["read"]
            },
            {
                role: "owner",
                permissions: ["readWrite"]
            }
        ]),
        db.collection("posts").createIndex({ url: 1 }, { unique: true, background: true })
    ]);
}
mongodb_1.default.connect(mongodb_config_1.config.CONNECTION_URL, mongodb_config_1.config.OPTIONS, function (error, client) {
    var db = client.db(mongodb_config_1.config.DATABASE);
    Promise.all([
        insertPosts(db),
        insertUsers(db),
        insertPrivileges(db)
    ]).catch(function (error) {
        console.log(error);
    }).then(function () {
        client.close();
    });
});
//# sourceMappingURL=insert-sample.js.map