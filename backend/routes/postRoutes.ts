import express from "express"
import authMiddleware from "../middleware/authMiddleware"
import eventController from "../controllers/postController"
const router = express.Router()

// @ desc   GET Post
// @ route  POST /api/posts/
// @ access Private
router.get("/", authMiddleware.authenticateToken, eventController.getPost)

// @ desc   POST Post
// @ route  POST /api/posts/
// @ access Private
router.post("/", authMiddleware.authenticateToken, eventController.createPost)

// @ desc   PUT Post
// @ route  POST /api/posts/:id
// @ access Private
router.put("/:id", authMiddleware.authenticateToken, eventController.editPost)

// @ desc   DELETE Post
// @ route  POST /api/posts/:id
// @ access Private
router.delete("/:id", authMiddleware.authenticateToken, eventController.deletePost)

module.exports = router
