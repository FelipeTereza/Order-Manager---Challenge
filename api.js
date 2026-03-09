import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = 3000;

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Error connecting to MongoDB:', error);
    }
};

connectDB();

//app.get('/api', (req, res) => {
    //res.json(arrResponse);
//});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});