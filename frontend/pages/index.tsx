// app/pages/index.tsx
import { GetServerSideProps } from 'next';
import axios from 'axios';
import styled from 'styled-components';
import Link from 'next/link';
import AppbarComponent from '../components/Appbar';

interface Apartment {
    _id: string;
    title: string;
    description: string;
    price: number;
    location: string;
}

interface Props {
    apartments: Apartment[];
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-bottom: 30px;
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; // Two columns of equal width
  gap: 30px; // Adjust the gap between cards
  width: 100%;
  padding-left: 50px;
  padding-top: 30px;
`;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: calc(70% - 8px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: calc(100% - 8px); // Full width on small screens
  }
`;

const CardTitle = styled.h2`
  margin: 0 0 8px;
  font-size: 18px;
  color: #333;
`;

const CardContent = styled.p`
  font-size: 14px;
  color: #666;
`;

const Home = ({ apartments }: Props) => {
    return (
        <MainContainer>
            <AppbarComponent />
            <CardsContainer>
                {apartments.map((apartment) => (
                    <Link key={apartment._id} href={`/apartments/${apartment._id}`} passHref>
                        <Card>
                            <CardTitle>{apartment.title}</CardTitle>
                            <CardContent>{apartment.description}</CardContent>
                            <CardContent>Price: ${apartment.price}</CardContent>
                            <CardContent>Location: {apartment.location}</CardContent>
                        </Card>
                    </Link>
                ))}
            </CardsContainer>
        </MainContainer>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
  console.log(`Fetching data from ${apiUrl}/apartments`); // Log the URL
  try {
      const { data } = await axios.get(`${apiUrl}/apartments`);
      console.log('Fetched apartments:', data); // Log the fetched data
      return { props: { apartments: data } };
  } catch (error) {
      console.error('Error fetching apartments:', error); // Log error details
      return { props: { apartments: [] } };
  }
};

export default Home;

