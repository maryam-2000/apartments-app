import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// Styled components for the search functionality
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

// Create a styled MUI button component
const Button = styled('button')(({ theme }) => ({
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#fff',
    borderColor: '#0070f3',
    color: '#0070f3',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    top: '20px',
    '&:hover': {
        backgroundColor: '#fff',
    },
}));

// const ResponsiveButton = styled(Button)(({ theme }) => ({
//     marginLeft: 'auto', // Pushes the button to the right
//     [theme.breakpoints.down('sm')]: {
//         display: 'none', // Hide the button on small screens if needed
//     },
// }));

export default function SearchAppBar() {

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar sx={{ padding: '8px' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                        >
                            <HomeIcon />
                        </IconButton>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                sx={{
                                    height: '50px'
                                }}
                            />
                        </Search>
                        <DatePicker
                            label="Start Date"
                            sx={{
                                ml: 2,
                                backgroundColor: 'white',
                                borderRadius: 1,
                                width: '200px',
                                '& .MuiInputBase-root': {
                                    height: '50px'
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'black',
                                },
                            }}
                        />
                        <DatePicker
                            label="End Date"
                            sx={{
                                ml: 2,
                                backgroundColor: 'white',
                                borderRadius: 1,
                                width: '200px',
                                '& .MuiInputBase-root': {
                                    height: '50px'
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'black',
                                },
                            }}
                        />
                        <InputBase
                            type="number"
                            placeholder="Guests"
                            inputProps={{ min: 1 }}
                            sx={{ ml: 2, backgroundColor: 'white', borderRadius: 1, width: '100px', padding: '6px 12px' }}
                        />
                        <Box sx={{ flexGrow: 1 }} /> {/* Spacer to push button to the right */}
                        <Link href="/add-apartment" passHref>
                            <Button>Add New Apartment</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Box>
        </LocalizationProvider>
    );
}