import Router from "express"
import {Posts} from "../lib/database/collection_type"

export const router = Router()

function createRegistData ( body:Posts ) {
    const datetime = new Date()
    return {
        url: body.url,
        published: datetime,
        update: datetime,
        title: body.title,
        content: body.content,
        keywords: (body.keywords || "").split(","),
        authors: (body.authors || "").split(","),
    }
} 

router.get("/", (req, res) => {
    res.render("./account/index.ejs")
})

router.get("/posts/regist", (req, res) => {
    res.render("./account/posts/regist-form.ejs")
})

router.get("/posts/regist/input", (req, res) => {
    const original = createRegistData(req.body)
    res.render("./account/posts/regist-form.ejs", { original })
})