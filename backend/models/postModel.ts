import { Schema } from "mongoose"
import mongoose from "mongoose"

interface postSchema {
    user : mongoose.Schema.Types.ObjectId
    postTitle : string
    postComments : string[]
    imageURL : string
}

const postSchema = new Schema<postSchema>({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User" // ensures that a goal has to be associated by a user
    },
    postTitle : {
        type : String,
    }, 
    postComments : {
        type : [String],
        required : false
    },
    imageURL : {
        type : String, // imageURL as string
        required : [true, "Please Enter an Image"]
    }
}, {timestamps : true})

const collection = "posts"
export default mongoose.model("Post", postSchema, collection)
