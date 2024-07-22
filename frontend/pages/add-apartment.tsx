// app/pages/add-apartment.tsx
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useEffect } from 'react';
import router from 'next/router'; // Import useRouter from next/router

// Define the ClientOnlyComponent
const ClientOnlyComponent = () => {
    const [clientData, setClientData] = useState<string | null>(null);

    useEffect(() => {
        // Fetch or set client-specific data
        setClientData('Client-only content');
    }, []);

    if (!clientData) return <div>Loading...</div>;

    return <div>{clientData}</div>;
};

// Your styled components
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center horizontally */
    justify-content: center; /* Center vertically */
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%; /* Ensure the form takes the full width of its container */
    margin: 20px 0; /* Add margin for spacing */
`;

const Input = styled.input`
    margin-bottom: 10px;
    padding: 8px;
    font-size: 16px;
`;

const Button = styled.button`
    padding: 10px;
    background-color: #0070f3;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        background-color: #005bb5;
    }
`;

const Message = styled.p`
    color: green;
    font-size: 16px;
    text-align: center;
`;

const AddApartment = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (parseFloat(price) < 0) {
            setError('Price cannot be negative');
        } else {
            setError('');
            // Handle form submission
            console.log('Price:', price);
        }
        setMessage(null);
        setError(null);

        try {
            const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
            console.log(`Posting data to ${apiUrl}/apartments`); // Log the URL
            const response = await axios.post(`${apiUrl}/apartments`, {
                title,
                description,
                price: parseFloat(price),
                location
            });
            console.log('Response:', response); // Log response for debugging
            setMessage('Apartment added successfully!');
            setTitle('');
            setDescription('');
            setPrice('');
            setLocation('');
            router.push('/'); // Navigate to the index page
        } catch (error) {
            console.error('Frontend error:', error); // Log detailed error
            setError('Error adding apartment.');
        }
    };

    const handlePriceChange = (e: { target: { value: any; }; }) => {
        const value = e.target.value;

         // Check if the value is a valid positive number
         if (/^\d*\.?\d*$/.test(value)) {
            setPrice(value);
        }
    };

    const handleKeyDown = (e: { key: string; preventDefault: () => void; }) => {
        // Prevent 'e' or 'E' or '-' key presses
        if (e.key === 'e' || e.key === 'E' || e.key === '-') {
            e.preventDefault();
        }
    };

    return (
        <Container>
            <h1>Add New Apartment</h1>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <Input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <Input
                    type="number"
                    placeholder="Price"
                    value={price}
                    onChange={handlePriceChange}
                    onKeyDown={handleKeyDown}
                    required
                    min="0"
                />
                <Input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
                <Button type="submit">Add Apartment</Button>
            </Form>
            {message && <Message>{message}</Message>}
            {error && <Message style={{ color: 'red' }}>{error}</Message>}
        </Container>
    );
};

export default AddApartment;
