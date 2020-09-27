import {config} from "../config/mongodb.config"
import Router from "express"
import MongoClient from "mongodb"
import * as type from "../lib/database/collection_type"

export const router = Router()

//req.urlは/*以降のパスが入る
router.get("/*", (req, res) => {
    MongoClient.connect(config.CONNECTION_URL, config.OPTIONS, (error, client) => {
        const db = client.db(config.DATABASE)
        db.collection("posts").findOne({
            url: req.url
        },{
            projection: {_id: 0}
        }).then((doc:type.Posts) => {
            res.json(doc)
        }).catch((error:MongoClient.MongoError) => {
            throw error
        }).then(_=>{
            client.close()
        })
    })
})