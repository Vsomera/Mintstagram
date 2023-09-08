import express from "express"
import authMiddleware from "../middleware/authMiddleware"
import eventController from "../controllers/eventController"
const router = express.Router()

// @ desc   GET Events
// @ route  POST /api/events/
// @ access Private
router.get("/", authMiddleware.authenticateToken, eventController.getEvent)

// @ desc   POST Event
// @ route  POST /api/events/
// @ access Private
router.post("/", authMiddleware.authenticateToken, eventController.postEvent)

// @ desc   PUT Event
// @ route  POST /api/events/:id
// @ access Private
router.put("/:id", authMiddleware.authenticateToken, eventController.editEvent)

// @ desc   DELETE Event
// @ route  POST /api/events/:id
// @ access Private
router.delete("/:id", authMiddleware.authenticateToken, eventController.deleteEvent)

module.exports = router
