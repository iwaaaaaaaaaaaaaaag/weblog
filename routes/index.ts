import Router from "express"

export const router = Router()

router.get("/", (req:any, res:any ) => {
    res.render("./index.ejs")
})