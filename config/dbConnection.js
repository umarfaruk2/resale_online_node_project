import mongoose from "mongoose";


const bdConnection = async (mongo_url) => {
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