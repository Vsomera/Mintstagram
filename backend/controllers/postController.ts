import { Request, Response } from "express";
import Post from "../models/postModel"

const getPost = async (req: Request, res: Response) => {
    // fetches all posts associated with user from database

    try {
        // @ts-ignore
        const { _id } = req.user
        const posts = await Post.find({ user: _id })

        return res.status(200).json({ posts })

    } catch (err) {
        console.log(err)
        return res.status(400).json({
            message: "Could not Access Posts",
            error: err
        })
    }
}

const createPost = async (req: Request, res: Response) => {
    // adds new post with associated user id to database
    try {
        // @ts-ignore
        const { _id } = req.user
        const { postTitle, imageURL } = req.body

        const post = await Post.create({
            user: _id,
            postTitle,
            imageURL
        })

        if (post) {
            return res.status(201).json({
                message: "New Post Added"
            })
        }

    } catch (err) {
        console.log(err)
        return res.status(400).json({
            message: "Could not add Post",
            err
        })
    }
}

const editPost = async (req: Request, res: Response) => {
    // edit post with the associated post id and user id
    try {
        // @ts-ignore
        const { _id } = req.user
        const docId = req.params.id
        const { postTitle } = req.body

        const updateDoc = await Post.findOneAndUpdate(
            { _id: docId, user: _id },
            {
                $set: {
                    postTitle,
                }
            }
        )

        if (updateDoc) {
            return res.status(201).json({
                message: "Post successfully updated"
            })
        } else {
            return res.status(400).json({
                message: "Unable to edit Post",
                error: "Event not found"
            })
        }

    } catch (err) {
        return res.status(400).json({
            message: "Unable to edit Document",
            err
        })
    }
}

const deletePost = async (req: Request, res: Response) => {
    // deletes a document based on the associated user id and doc id

    try {
        // @ts-ignore
        const { _id } = req.user
        const docId = req.params.id

        const deleteDoc = await Post.deleteOne({
            _id: docId,
            user: _id
        })

        if (deleteDoc.deletedCount >= 1) {
            console.log(deleteDoc)
            return res.status(200).json({
                message: "Post successfully deleted",
            })
        } else {
            return res.status(400).json({
                message: "Unable to delete post",
                error: "Post does not exists"
            })
        }

    } catch (err) {
        return res.status(400).json({
            message: "Unable to delete post",
            err
        })
    }
}

export default {
    getPost,
    createPost,
    editPost,
    deletePost
}
