import { Request, Response } from "express"
import bcrypt, { genSalt } from "bcryptjs"
import Jwt from "jsonwebtoken"
import hashMiddleware from "../middleware/hashMiddleware"
import User from "../models/userModel"

// @ desc Register User
// @ route POST /api/users
// @ access PUBLIC

const registerUser = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body

        // checks if user already exists in database
        const checkEmail = await User.findOne({ email: email })
        if (checkEmail) {
            return res.status(400).json({
                message: "Could not register user",
                error: "User already exists"
            })
        }

        // hash user password
        const hashedPassword = await hashMiddleware.hashPassword(password)

        // adds user to database
        const user = await User.create({
            username: username,
            email: email,
            password: hashedPassword
        })

        // send confirmation user has been registered
        if (user) {
            return res.status(201).json({
                message: "User added to database"
            })
        }


    } catch (err) {
        return res.status(400).json({
            message: "Could not register user",
            error: err
        })
    }
}

const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body

        // checks if user exists in database
        const user = await User.findOne({ email })



    } catch (err) {

    }
}

export default {
    registerUser,
    loginUser
}
