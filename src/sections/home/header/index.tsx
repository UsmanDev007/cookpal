import React from 'react';
import { Box, Grid, IconButton, Typography, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import logo from "../../../assets/logo-img.svg";
import headerImage from "../../../assets/header-img.png";

const Header = () => {
    return (
        <Box flexGrow={1}>
            <Grid container>
                <Grid item xl={12} xs={12}>
                    <Box sx={styles.boxWrap}>
                        <Box sx={styles.imageWrap}>
                            <Typography sx={styles.heading}>
                                Food Diary
                            </Typography>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xl={12} xs={12} display='flex' justifyContent='center' my={2}>
                    <Box sx={{ padding: "15px", borderTop: "1px solid #D9D9D9", borderBottom: "1px solid #D9D9D9" }}>
                        <Box display='flex' justifyContent='center' alignItems='center' flexWrap='wrap' gap={8}>
                            <Typography sx={styles.bottomTextStyle}>Home</Typography>
                            <Typography sx={styles.bottomTextStyle}>Explore</Typography>
                            <Typography sx={styles.bottomTextStyle}>Help</Typography>
                            <Typography sx={styles.bottomTextStyle}>Profile</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Header;

// styles
const styles = {
    boxWrap: {
        position: "relative",
        height: "435px",
        zIndex: "2",
        textAlign: "center",
        overflow: "hidden",
    },
    imageWrap: {
        position: "absolute",
        zIndex: "-1",
        height: "435px",
        top: 2,
        backgroundImage: `url(${headerImage})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
        "@media (max-width: 500px)": {
            display: "none",
        },
    },
    heading: {
        fontWeight: 400,
        fontSize: "60px",
        fontFamily: "Montserrat",
        lineHeight: "73.14px",
        color: "#fff",
        position: "absolute",
        top: "24%",
        left: "7.5%",
    },
    bottomTextStyle: {
        color: "#84BD00",
        fontWeight: 600,
        fontSize: "20px",
        lineHeight: "24.38px",
    },
};
