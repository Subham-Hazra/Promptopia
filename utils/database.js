import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    console.log("strictQuery")
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log("Database is already connected")
    }

    try {
        console.log("process.env.MONGODB_URI : ", process.env.MONGODB_URI)
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_prompt',
        })
        isConnected = true;
        console.log("Database connected")
    } catch (error) {
        console.log("error", error)
    }
}