import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaHome } from 'react-icons/fa';

// Styled components for the Navbar and its elements
const Navbar = styled.nav`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); // Example box shadow
`;

const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  padding-left: 200px; // Adjust padding to shift content to the left
`;

const Logo = styled.div`
  background-color: red;
  color: white;
//   padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
  width: 33px;  // Adjust the width to make it square
  height: 33px; // Adjust the height to make it square
  display: flex;          // Center icon and text inside button
  align-items: center;    // Center icon and text vertically
  justify-content: center; // Center icon and text horizontally
`;

const InputField = styled.input`
  margin-right: 10px;
  padding: 5px;
`;

const DateInput = styled(InputField)`
  width: 150px;
`;

const GuestInput = styled(InputField)`
  width: 120px;
`;

const SearchButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  width: 30px;  // Adjust the width to make it square
  height: 30px; // Adjust the height to make it square
  border-radius: 5px;
  cursor: pointer;
  display: flex;          // Center icon and text inside button
  align-items: center;    // Center icon and text vertically
  justify-content: center; // Center icon and text horizontally
`;

const SearchIcon = styled(FaSearch)`
  width: 10px;
  height: 10px;
`;

const HomeIcon = styled(FaHome)`
  width: 22px;
  height: 22px;
`;

// Navbar Component
const NavbarComponent = () => {
    return (
        <Navbar>
            <NavbarContent>
                <Logo>
                    <HomeIcon />
                </Logo>
                <InputField placeholder="Search" />
                <DateInput type="date" />
                <DateInput type="date" />
                <GuestInput type="number" placeholder="Guests" min="1" />
                <SearchButton>
                    <SearchIcon />
                </SearchButton>
            </NavbarContent>
        </Navbar>
    );
};

export default NavbarComponent;
