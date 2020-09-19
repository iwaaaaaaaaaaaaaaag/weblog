import * as type from "../lib/database/collection_type"
import {config} from "../config/mongodb.config"
import Router from "express"
import MongoClient from "mongodb"

export const router = Router()

router.get("/", (req, res)=>{
    const keyword = req.query.keyword || ""
    const regexp = new RegExp(`.*${keyword}.*`)

    MongoClient.connect(config.CONNECTION_URL, config.OPTIONS, (error, client)=>{
        const db = client.db(config.DATABASE)
        db.collection("posts").find({
            $or: [{title: regexp}, {content: regexp}]
        }).sort({ published: -1})
        .toArray()
        .then((list:Promise<type.Posts>[]) => {
        const data = {
            keyword,
            list
        }
        res.render("./search/list.ejs", data)
        }).catch((error:MongoClient.MongoError) => {
            throw error
        }).then(()=>{
            client.close()
        })
    })
})