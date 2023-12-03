import mongoose from "mongoose";

const connection = {};
export const connectToDB = async () =>{
    try {
        if (connection.isConnected) return;
        const db = mongoose.connect(process.env.MONGO_URI)
        connection.isConnected = (await db).connections[0].readyState;
        console.log('MongoDb connected');
        
    } catch (error) {
        console.log("🚀 ~ file: utils.js:9 ~ connectToDB ~ error:", error)
        
    }
}