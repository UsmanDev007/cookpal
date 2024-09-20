import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import footerImg from '../assets/footer-img.jpg';
import footerlogo from '../assets/CP-Logo 2.png';

const Footer = () => {
  return (
    <Box flexGrow={1} sx={styles.container}>
      <Grid container>
        <Grid item xs={12}>
          <Box sx={styles.boxWrap}>
            <Box sx={styles.imageWrap} />
            <Box sx={styles.contentWrap}>
              <img src={footerlogo} alt="Footer Logo" style={styles.logo} />
              <Typography variant="body2" sx={styles.rightsText}>
                All Rights Reserved
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

// Styles
const styles = {
  container: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
  },
  boxWrap: {
    height: '300px', 
    position: 'relative',
  },
  contentWrap: {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    paddingLeft: '50px', 
    paddingTop: '10%', 
    position: 'relative',
    zIndex: 2, 
  },
  imageWrap: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '300px',
    backgroundImage: `url(${footerImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    filter: 'brightness(40%)',
    zIndex: 1, 
  },
  logo: {
    height: '60px',
    marginBottom: '10px', 
  },
  rightsText: {
    color: '#ffffff', 
    fontFamily: 'Montserrat', 
    fontSize: '20px',
    fontWeight: 400, 
    lineHeight: '24.38px',
    textAlign: 'left', 
},

};
