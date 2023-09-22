import express from "express"
import dotenv from "dotenv"
import 'dotenv/config'
import cors from 'cors'
import connectDB from "./config/db"
dotenv.config()
connectDB()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

// Rest API Routes
app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/posts", require("./routes/postRoutes"))

app.listen(port, () => {
    console.log(`Development : Server running on http://localhost:${port}`)
})
