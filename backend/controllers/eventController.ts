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

export default {
    getEvent,
    postEvent
}