import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const mongo_url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.ij0ac.mongodb.net/?retryWrites=true&w=majority`;

const bdConnection = async () => {
    try {
        const DB_OPTIONS = {
            dbName: 'resale'
        }
        mongoose.set('strictQuery', true);
        await mongoose.connect(mongo_url, DB_OPTIONS);
        console.log('db connect successfully')
    } catch (error) {
        console.log(error);
    }
}

export default bdConnection;