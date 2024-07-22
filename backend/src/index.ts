import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import apartmentRoutes from './routes/apartments';

dotenv.config();

const app = express();

app.use(cors()); // Allow cross-origin requests

const port = 5000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI || '', {
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});

app.use('/apartments', apartmentRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
