import { Request, Response } from "express";
import Event from "../models/eventModel"

const postEvent = async (req: Request, res: Response) => {
    // adds new event with associated user id to database
    
    try {
        // @ts-ignore
        const { _id } = req.user
        const { title, eventDetails, eventDate } = req.body

        const event = await Event.create({
            user: _id,
            title: title,
            eventDetails : eventDetails == null ? "" : eventDetails,
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
            message : "Could not add event",
            error : err
        })
    }
}

export default {
    postEvent
}