import * as type from "../lib/database/collection_type"
import { config as app_config } from "../config/app.config"
import { config as mongodb_donfig } from "../config/mongodb.config"
import Router from "express"
import MongoClient from "mongodb"

export const router = Router()

router.get("/", (req, res) => {
    const page = req.query.page ? parseInt(req.query.page as string) : 1
    const keyword = req.query.keyword || ""
    const regexp = new RegExp(`.*${keyword}.*`)
    const query = {
        $or: [{ title: regexp }, { content: regexp }]
    }
    MongoClient.connect(mongodb_donfig.CONNECTION_URL, mongodb_donfig.OPTIONS, (error, client) => {
        const db = client.db(mongodb_donfig.DATABASE)

        Promise.all([
            db.collection("posts")
                .find(query)
                .count(),
            db.collection("posts")
                .find(query)
                .sort({ published: -1 })
                .skip((page - 1) * app_config.search.MAX_ITEM_PER_PAGE)
                .limit(app_config.search.MAX_ITEM_PER_PAGE)
                .toArray()
        ])
            .then((results:[number,type.Posts[]]) => {
                const data = {
                    keyword,
                    count:results[0], 
                    list:results[1],
                    pagination:{
                        max: Math.ceil(results[0] / app_config.search.MAX_ITEM_PER_PAGE),
                        current: page
                    }
                }
                res.render("./search/list.ejs", data)
            }).catch((error: MongoClient.MongoError) => {
                throw error
            }).then(() => {
                client.close()
            })
    })
})