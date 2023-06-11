import express, { Request, Response } from "express"
const router = express.Router()

// @ desc   Register User
// @ route  POST /api/users/
// @ access Public
router.post("/", (req : Request, res : Response) => {
    res.status(200).send("Register User")
})

// @ desc   Login User
// @ route  POST /api/users/login
// @ access Public
router.post("/login", (req : Request, res : Response) => {
    res.status(200).send("Login User")
})

// @ desc   User Info
// @ route  GET /api/users/me
// @ access Private
router.get("/me", (req : Request, res : Response) => {
    res.status(200).send("Get Logged in user's info")
})

module.exports = router
