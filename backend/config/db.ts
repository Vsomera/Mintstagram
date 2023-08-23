import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.URI}`)
        console.log(`Database Connected : ${conn.connection.host}`)
    } catch (err) {
        console.log(err)
        process.exit(1) // exits connection with failure
    }
}

export default connectDB