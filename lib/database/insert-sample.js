"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongodb_config_1 = require("../../config/mongodb.config");
var mongodb_1 = __importDefault(require("mongodb"));
// posts, users, privileges
var InsertPosts = function (db) {
    var postsData = [
        {
            url: "/2017/07/hoge.html",
            published: new Date(2017, 7, 8),
            update: new Date(2017, 7, 8),
            title: "Node.js 応用",
            content: "test1",
            keywords: ["Node.js"],
            authors: ["Yuta Sato"]
        },
        {
            url: "/2017/08/hoge.html",
            published: new Date(2017, 7, 8),
            update: new Date(2017, 7, 8),
            title: "Node.js 応用",
            content: "test2",
            keywords: ["Node.js"],
            authors: ["Yuta Sato"]
        },
        {
            url: "/2017/09/hoge.html",
            published: new Date(2017, 7, 8),
            update: new Date(2017, 7, 8),
            title: "Node.js 応用",
            content: "test3",
            keywords: ["Node.js"],
            authors: ["Yuta Sato"]
        },
        {
            url: "/2017/10/hoge.html",
            published: new Date(2017, 7, 8),
            update: new Date(2017, 7, 8),
            title: "Node.js 応用",
            content: "test4",
            keywords: ["Node.js"],
            authors: ["Yuta Sato"]
        },
        {
            url: "/2017/11/hoge.html",
            published: new Date(2017, 7, 8),
            update: new Date(2017, 7, 8),
            title: "Node.js 応用",
            content: "test5",
            keywords: ["Node.js"],
            authors: ["Yuta Sato"]
        },
        {
            url: "/2017/12/hoge.html",
            published: new Date(2017, 7, 8),
            update: new Date(2017, 7, 8),
            title: "Node.js 応用",
            content: "test5",
            keywords: ["Node.js"],
            authors: ["Yuta Sato"]
        }
    ];
    return Promise.all([
        db.collection("posts").insertMany(postsData),
        db.collection("posts").createIndex({ url: 1 }, { unique: true, background: true })
    ]);
};
var insertUsers = function (db) {
    var usersData = {
        email: "iwasaki.yuki@sample.com",
        name: "iwasaki",
        password: "iwasaki",
        role: "owner"
    };
    return Promise.all([
        db.collection("users").insertOne(usersData),
        db.collection("users")
            .createIndex({ email: 1 }, { unique: true, background: true })
    ]);
};
var insertPrivileges = function (db) {
    var privilegesData = [
        { role: "default", permissions: ["read"] },
        { role: "owner", permissions: ["readWrite"] }
    ];
    return Promise.all([
        db.collection("privileges").insertMany(privilegesData),
        db.collection("privileges")
            .createIndex({ role: 1 }, { unique: true, background: true })
    ]);
};
mongodb_1.default.connect(mongodb_config_1.config.CONNECTION_URL, mongodb_config_1.config.OPTIONS, function (error, client) {
    var db = client.db(mongodb_config_1.config.DATABASE);
    Promise.all([
        InsertPosts(db),
        insertUsers(db),
        insertPrivileges(db)
    ]).catch(function (error) {
        console.log(error);
    }).then(function () {
        client.close();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zZXJ0LXNhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluc2VydC1zYW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4REFBa0Q7QUFDbEQsb0RBQWlDO0FBR2pDLDJCQUEyQjtBQUMzQixJQUFNLFdBQVcsR0FBRyxVQUFTLEVBQWtCO0lBQzNDLElBQU0sU0FBUyxHQUFrQjtRQUM3QjtZQUNJLEdBQUcsRUFBRSxvQkFBb0I7WUFDekIsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1QixLQUFLLEVBQUUsWUFBWTtZQUNuQixPQUFPLEVBQUUsT0FBTztZQUNoQixRQUFRLEVBQUMsQ0FBQyxTQUFTLENBQUM7WUFDcEIsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDO1NBQ3pCO1FBQ0Q7WUFDSSxHQUFHLEVBQUUsb0JBQW9CO1lBQ3pCLFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMvQixNQUFNLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDNUIsS0FBSyxFQUFFLFlBQVk7WUFDbkIsT0FBTyxFQUFFLE9BQU87WUFDaEIsUUFBUSxFQUFDLENBQUMsU0FBUyxDQUFDO1lBQ3BCLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztTQUN6QjtRQUNEO1lBQ0ksR0FBRyxFQUFFLG9CQUFvQjtZQUN6QixTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDL0IsTUFBTSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzVCLEtBQUssRUFBRSxZQUFZO1lBQ25C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