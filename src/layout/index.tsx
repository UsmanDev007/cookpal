import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
import Header from '../sections/home/header';
import { Box, Grid, IconButton, Typography, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../assets/logo-img.svg";
import headerImage from "../assets/header-img.png";


const Layout = () => {
  return (
    <Box>
      <Navbar />
      <Box sx={{ position: 'sticky', top: 0, zIndex: 999, backgroundColor: '#fff' }} mb={2}>
        <Grid container spacing={2} sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }} my={2}>
          <Grid item xl={2} lg={2} md={3} sm={12} xs={12} sx={{ padding: { xl: 2, lg: 2, md: 2, sm: 4, xs: 4 } }}>
            <Box sx={{ display: "flex", justifyContent: { xl: 'end', lg: 'end' } }}>
              <img src={logo} alt="logo" style={{ mixBlendMode: "multiply" }} />
            </Box>
          </Grid>

          <Grid item xl={8} lg={8} md={7} sm={12} xs={12}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '4px',
                width: '100%',
              }}
            >
              <TextField
                fullWidth
                placeholder="Search"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <div
                        style={{
                          padding: '8px 14px',
                          backgroundColor: '#D0C5C5',
                          borderRadius: '20px',
                          fontSize: '14px',
                        }}
                      >
                        All Categories
                      </div>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton sx={{
                        backgroundColor: '#f0ecec',
                        borderRadius: '20px',
                        fontSize: '14px',
                        "&:hover": {
                          backgroundColor: 'none',
                        },
                      }}>
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{
                  width: '100%',
                  maxWidth: '600px',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderRadius: '50px',
                    },
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
