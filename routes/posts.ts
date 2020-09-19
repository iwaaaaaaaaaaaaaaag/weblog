import {config} from "../config/mongodb.config"
import Router from "express"
import MongoClient from "mongodb"
import * as type from "../lib/database/collection_type"

export const router = Router()

router.get("/*", (req, res) => {
    MongoClient.connect(config.CONNECTION_URL, config.OPTIONS, (error, client) => {
        const db = client.db(config.DATABASE)
        db.collection("posts").findOne({
          url: req.url  
        }).then((doc:Promise<type.Posts>) => {
          res.render("./posts/index.ejs", doc)
        }).catch((error:MongoClient.MongoError) => {
          throw error
        }).then(()=>{
            client.close()
        })
    })
})

