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
            content: "test１",
            keywords: ["Node.js"],
            authors: ["Yuta Sato"]
        },
        {
            url: "/2017/08/hoge.html",
            published: new Date(2017, 7, 8),
            update: new Date(2017, 7, 8),
            title: "Node.js 応用",
            content: "test１",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zZXJ0LXNhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluc2VydC1zYW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw4REFBa0Q7QUFDbEQsb0RBQWlDO0FBR2pDLDJCQUEyQjtBQUMzQixJQUFNLFdBQVcsR0FBRyxVQUFTLEVBQWtCO0lBQzNDLElBQU0sU0FBUyxHQUFrQjtRQUM3QjtZQUNJLEdBQUcsRUFBRSxvQkFBb0I7WUFDekIsU0FBUyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLE1BQU0sRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM1QixLQUFLLEVBQUUsWUFBWTtZQUNuQixPQUFPLEVBQUUsT0FBTztZQUNoQixRQUFRLEVBQUMsQ0FBQyxTQUFTLENBQUM7WUFDcEIsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDO1NBQ3pCO1FBQ0Q7WUFDSSxHQUFHLEVBQUUsb0JBQW9CO1lBQ3pCLFNBQVMsRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUMvQixNQUFNLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDNUIsS0FBSyxFQUFFLFlBQVk7WUFDbkIsT0FBTyxFQUFFLE9BQU87WUFDaEIsUUFBUSxFQUFDLENBQUMsU0FBUyxDQUFDO1lBQ3BCLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztTQUN6QjtLQUNBLENBQUE7SUFDTCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDZixFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDNUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBQyxHQUFHLEVBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUMsQ0FBQztLQUNoRixDQUFDLENBQUE7QUFDTixDQUFDLENBQUE7QUFFRCxJQUFNLFdBQVcsR0FBRyxVQUFVLEVBQWtCO0lBQzVDLElBQU0sU0FBUyxHQUFlO1FBQzFCLEtBQUssRUFBRSx5QkFBeUI7UUFDaEMsSUFBSSxFQUFFLFNBQVM7UUFDZixRQUFRLEVBQUMsU0FBUztRQUNsQixJQUFJLEVBQUMsT0FBTztLQUNmLENBQUE7SUFDRCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDZixFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7UUFDM0MsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7YUFDckIsV0FBVyxDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7S0FDN0QsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBRUQsSUFBTSxnQkFBZ0IsR0FBRyxVQUFVLEVBQWtCO0lBQ2pELElBQU0sY0FBYyxHQUFvQjtRQUNwQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUM7UUFDdkMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxFQUFDO0tBQ3pDLENBQUE7SUFDTCxPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDZixFQUFFLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUM7UUFDdEQsRUFBRSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7YUFDMUIsV0FBVyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFDLENBQUM7S0FDM0QsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFBO0FBR0QsaUJBQVcsQ0FBQyxPQUFPLENBQUMsdUJBQU0sQ0FBQyxjQUFjLEVBQUUsdUJBQU0sQ0FBQyxPQUFPLEVBQUUsVUFBQyxLQUFLLEVBQUUsTUFBTTtJQUNyRSxJQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLHVCQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQztRQUNSLFdBQVcsQ0FBQyxFQUFFLENBQUM7UUFDZixXQUFXLENBQUMsRUFBRSxDQUFDO1FBQ2YsZ0JBQWdCLENBQUMsRUFBRSxDQUFDO0tBQ3ZCLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxLQUFLO1FBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUN0QixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDSixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDbEIsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSJ9