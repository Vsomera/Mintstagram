import { Request, Response } from "express"
import asyncHandler from "express-async-handler"
import User from "../models/userModel"

// @ desc Register User
// @ route POST /api/users
// @ access PUBLIC

// @ts-ignore
const registerUser = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body

        // checks if user already exists in database
        const checkEmail = await User.findOne({ email : email })
        if (checkEmail) {
            return res.status(400).json({
                Error : "Email already in used"
            })
        }

        // adds user to database
        const user = await User.create({
            username: username,
            email: email,
            password: password
        })
        
        if (user) {
            return res.status(201).json({
                message : "User added to database"
            })
        }


    } catch (err) {
        res.status(400).json({
            Error : "An error has occurred",
            Details : err
        })
    }
}

export default {
    registerUser
}
