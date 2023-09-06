import { Schema } from "mongoose"
import mongoose from "mongoose"

interface eventSchema {
    user : mongoose.Schema.Types.ObjectId
    title : string
    eventDetails? : string
    eventDate : Date
    completed : boolean
}

const eventSchema = new Schema<eventSchema>({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User" // ensures that a goal has to be associated by a user
    },
    title : {
        type : String,
        required : [true, "Please enter an Event title"]
    }, 
    eventDetails : {
        type : String,
        required : false
    },
    eventDate : {
        type : Date,
        immutable : true // allows the date to be changed
    },
    completed : {
        type : Boolean,
        required : true
    }
})

const collection = "events"
export default mongoose.model("Event", eventSchema, collection)