import { Request, Response } from "express";
import Event from "../models/eventModel"

const getEvent = async (req: Request, res: Response) => {
    // fetches all events associated with user from database

    try {
        // @ts-ignore
        const { _id } = req.user
        const events = await Event.find({ user: _id })

        return res.status(200).json({ events })

    } catch (err) {
        console.log(err)
        return res.status(400).json({
            message: "Could not Access Events",
            error: err
        })
    }
}

const postEvent = async (req: Request, res: Response) => {
    // adds new event with associated user id to database
    try {
        // @ts-ignore
        const { _id } = req.user
        const { title, eventDetails, eventDate } = req.body

        const event = await Event.create({
            user: _id,
            title: title,
            eventDetails: eventDetails == null ? "" : eventDetails,
            eventDate: eventDate == null ? Date.now() : eventDate,
            completed: false
        })

        if (event) {
            return res.status(201).json({
                message: "New Event Added"
            })
        }

    } catch (err) {
        console.log(err)
        return res.status(401).json({
            message: "Could not add event",
            error: err
        })
    }
}

const editEvent = async (req: Request, res: Response) => {
    // edit event with the associated event id and user id
    try {
        // @ts-ignore
        const { _id } = req.user
        const docId = req.params.id
        const { title, eventDetails, eventDate, completed } = req.body

        const updateDoc = await Event.findOneAndUpdate(
            { _id: docId, user: _id },
            {
                $set: {
                    title,
                    eventDetails,
                    eventDate,
                    completed
                }
            }
        )

        if (updateDoc) {
            return res.status(201).json({
                message: "Event successfully updated"
            })
        } else {
            return res.status(400).json({
                message: "Unable to edit Event",
                error: "Event not found"
            })
        }

    } catch (err) {
        return res.status(400).json({
            message: "Event to edit Document",
            err
        })
    }
}

const deleteEvent = async (req: Request, res: Response) => {
    // deletes a document based on the associated user id and doc id

    try {
        // @ts-ignore
        const { _id } = req.user
        const docId = req.params.id

        const deleteDoc = await Event.deleteOne({
            _id: docId,
            user: _id
        })

        if (deleteDoc.deletedCount >= 1) {
            console.log(deleteDoc)
            return res.status(200).json({
                message: "Event successfully deleted",
            })
        } else {
            return res.status(400).json({
                message: "Unable to delete document",
                error: "Event does not exists"
            })
        }

    } catch (err) {
        return res.status(400).json({
            message: "Event to delete document",
            err
        })
    }
}

export default {
    getEvent,
    postEvent,
    editEvent,
    deleteEvent
}