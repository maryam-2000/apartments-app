import mongoose from 'mongoose';

const apartmentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Apartment = mongoose.model('Apartment', apartmentSchema);

export default Apartment;
