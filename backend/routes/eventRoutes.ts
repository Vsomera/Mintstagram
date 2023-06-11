import express, { Request, Response } from "express"
const router = express.Router()

// @ desc   GET Events
// @ route  POST /api/events/
// @ access Private
router.get("/", (req : Request, res : Response) => {
    res.status(200).send("Get User Events")
})

// @ desc   POST Event
// @ route  POST /api/events/
// @ access Private
router.post("/", (req : Request, res : Response) => {
    res.status(200).send("Post User Events")
})

// @ desc   PUT Event
// @ route  POST /api/events/:id
// @ access Private
router.put("/:id", (req : Request, res : Response) => {
    const id = req.params.id
    res.status(200).json({
        message : "Edit Events",
        id : id
    })
})

// @ desc   DELETE Event
// @ route  POST /api/events/:id
// @ access Private
router.delete("/:id", (req : Request, res : Response) => {
    const id = req.params.id
    res.status(200).json({
        message : "Delete Events",
        id : id
    })
})

module.exports = router
