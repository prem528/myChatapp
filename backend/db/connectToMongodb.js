import mongoose from "mongoose";

const connectToMongodb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected to MongoDB")
        
    } catch (error) {
        console.log("error connecting to MongoDB" , error.message)
        
    }
}

export default connectToMongodb;