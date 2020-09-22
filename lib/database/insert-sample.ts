import {config} from "../../config/mongodb.config"
import MongoClient from "mongodb"
import * as type from "./collection_type"

// posts, users, privileges
const InsertPosts = function(db: MongoClient.Db){
    const postsData : type.Posts[] = [
        {
            url: "/2017/07/hoge.html",
            published: new Date(2017, 7, 8),
            update: new Date(2017, 7, 8),
            title: "Node.js 応用",
            content: "test1",
            keywords:"Node.js",
            authors: "Yuta Sato"
        },
        {
            url: "/2017/08/hoge.html",
            published: new Date(2017, 7, 8),
            update: new Date(2017, 7, 8),
            title: "Node.js 応用",
            content: "test2",
            keywords:"Node.js",
            authors: "Yuta Sato"
        },
        {
            url: "/2017/09/hoge.html",
            published: new Date(2017, 7, 8),
            update: new Date(2017, 7, 8),
            title: "Node.js 応用",
            content: "test3",
            keywords:"Node.js",
            authors: "Yuta Sato"
        },
        {
            url: "/2017/10/hoge.html",
            published: new Date(2017, 7, 8),
            update: new Date(2017, 7, 8),
            title: "Node.js 応用",
            content: "test4",
            keywords:"Node.js",
            authors: "Yuta Sato"
        },
        {
            url: "/2017/11/hoge.html",
            published: new Date(2017, 7, 8),
            update: new Date(2017, 7, 8),
            title: "Node.js 応用",
            content: "test5",
            keywords:"Node.js",
            authors: "Yuta Sato"
        },
        {
            url: "/2017/12/hoge.html",
            published: new Date(2017, 7, 8),
            update: new Date(2017, 7, 8),
            title: "Node.js 応用",
            content: "test5",
            keywords:"Node.js",
            authors: "Yuta Sato"
        }

        ]
    return Promise.all([
        db.collection("posts").insertMany(postsData),
        db.collection("posts").createIndex({url:1}, {unique: true, background: true})
    ])
}

const insertUsers = function (db :MongoClient.Db) {
    const usersData: type.Users = {
        email: "iwasaki.yuki@sample.com",
        name: "iwasaki",
        password:"iwasaki",
        role:"owner"
    }
    return Promise.all([
        db.collection("users").insertOne(usersData),
        db.collection("users")
        .createIndex({email: 1}, {unique: true, background: true})
    ])
}

const insertPrivileges = function (db :MongoClient.Db) {
    const privilegesData:type.Privileges[] =[
        {role: "default",permissions: ["read"]},
        {role: "owner",permissions: ["readWrite"]}
        ]
    return Promise.all([
        db.collection("privileges").insertMany(privilegesData),
        db.collection("privileges")
        .createIndex({role:1}, {unique: true, background: true})
    ])
}


MongoClient.connect(config.CONNECTION_URL, config.OPTIONS, (error, client) => {
    const db = client.db(config.DATABASE)
    Promise.all([
        InsertPosts(db),
        insertUsers(db),
        insertPrivileges(db)
    ]).catch((error) => {
        console.log(error)
    }).then(() => {
        client.close()
    })
})