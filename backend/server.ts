import express from "express"
import dotenv from "dotenv"
import cors from 'cors';
dotenv.config()

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

// Rest API Routes
app.use("/api/users", require("./routes/userRoutes"))
app.use("/api/events", require("./routes/eventRoutes"))

app.listen(port, () => {
    console.log(`Development : Server running on http://localhost:${port}`)
})
