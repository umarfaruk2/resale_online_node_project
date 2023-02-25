import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config({
    path: "./config.env",
})
const app = express();
import dbConnection from './config/dbConnection.js';
import productRoute from './routes/product.route.js';
const port = process.env.PORT || 5000;
const mongo_url = process.env.MONGO_URL;

// middleware
app.use(cors({
    origin: "http://localhsot:3000",
    credentials: true
}))
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// db
dbConnection(mongo_url);

// router
app.use('/api/product', productRoute);

// 404 error handler
app.use((req, res, next) => {
    next("Something went wrong");
})

// error handler
app.use((err, req, res, next) => {
    if (!res.headersSent) {
        if (err.message) {
            res.status(500).json({
                status: 'fail',
                message: err.message
            });
        } else {
            res.status(404).json({
                status: 'fail',
                message: "Something went wrong or url not correct"
            });
        }
    } else {
        next("Something went wrong");
    }
})

app.listen(port, () => console.log('app runing'));