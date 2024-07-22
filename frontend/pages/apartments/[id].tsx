// app/pages/apartments/[id].tsx
import { GetServerSideProps } from 'next';
import axios from 'axios';
import styled from 'styled-components';

interface Apartment {
    _id: string;
    title: string;
    description: string;
    price: number;
    location: string;
}

interface Props {
    apartment: Apartment | null;
}

const Container = styled.div`
    padding: 20px;
`;

const Heading = styled.h1`
    color: #333;
`;

const Description = styled.p`
    font-size: 1.2em;
`;

const Detail = styled.div`
    margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
    color: red;
    font-size: 1.2em;
    text-align: center;
`;

const ApartmentDetail = ({ apartment }: Props) => {
    if (!apartment) {
        return (
            <Container>
                <ErrorMessage>Apartment not found</ErrorMessage>
            </Container>
        );
    }

    return (
        <Container>
            <Heading>{apartment.title}</Heading>
            <Detail>
                <Description>{apartment.description}</Description>
                <p><strong>Price:</strong> ${apartment.price.toFixed(2)}</p>
                <p><strong>Location:</strong> {apartment.location}</p>
            </Detail>
        </Container>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params || {};
    if (!id || Array.isArray(id)) {
        return { props: { apartment: null } };
    }

    try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/apartments/${id}`);
        return { props: { apartment: data } };
    } catch (error) {
        return { props: { apartment: null } };
    }
};

export default ApartmentDetail;
