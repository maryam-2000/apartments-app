import express from 'express';
import Apartment from '../models/Apartment';

const router = express.Router();

// List all apartments
router.get('/', async (req, res) => {
    try {
        const apartments = await Apartment.find();
        res.json(apartments);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
});

// Get apartment details
router.get('/:id', async (req, res) => {
    try {
        const apartment = await Apartment.findById(req.params.id);
        if (apartment == null) {
            return res.status(404).json({ message: 'Cannot find apartment' });
        }
        res.json(apartment);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
});

// Add a new apartment
router.post('/', async (req, res) => {
    const apartment = new Apartment({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        location: req.body.location
    });

    try {
        const newApartment = await apartment.save();
        res.status(201).json(newApartment);
    } catch (err) {
        console.error('Backend error:', err); // Log detailed error
        if (err instanceof Error) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
});

export default router;
