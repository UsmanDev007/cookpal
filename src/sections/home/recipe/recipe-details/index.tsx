import React from 'react';
import { Box, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SectionWrapper from '../../../../components/section-wrapper';
import { useLocation } from 'react-router-dom';


type RecipeCardProps = {
    id: number;
    name: string;
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    reviewCount: number;
    mealType: string[];
    rating: number;
    image: string;
};

const RecipeDetails = () => {
    const location = useLocation();
    const recipeData = location.state?.recipe;

    if (!recipeData) {
        return <div>No recipe data available</div>;
    }
   

    return (
        <React.Fragment>
            <SectionWrapper>
                <Box flexGrow={1}>
                    <Grid container spacing={10} mt={10}>
                    
                        <Grid item xl={6} xs={12} display="flex" justifyContent="flex-start">
                            <Box 
                                sx={{ 
                                    background: '#8B888836', 
                                    borderRadius: "16px", 
                                    p: 4, 
                                    width: '100%',
                                    maxWidth: '560px', 
                                    overflow: 'hidden'   
                                }}
                            >
                                <Box mb={3}>
                                    
                                    <Typography variant="h5" mb={2} fontWeight="bold">
                                        {recipeData?.name}
                                    </Typography>
                                
                                    <Typography variant="body1" mb={4} color="textSecondary">
                                        {recipeData?.instructions || 'No instructions provided.'}
                                    </Typography>
                                    
                                    <Typography mb={2} variant="h6">Ingredients</Typography>
                                    <Divider />
                                </Box>
                                
                                <List>
                                    {recipeData?.ingredients?.map((item: any, index: number) => (
                                        <ListItem key={index} sx={{ display: "flex", alignItems: "center" }}>
                                            <ListItemAvatar>
                                                <CheckCircleIcon sx={{ color: "#509E2F", height: "25px", width: "25px" }} />
                                            </ListItemAvatar>
                                            <ListItemText primary={item} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Grid>
                        
                        
                        <Grid item xl={6} xs={12} display="flex" justifyContent="center" alignItems="center">
                            <Box 
                                sx={{ 
                                    width: '100%',
                                    maxWidth: '550px',  
                                    height: 'auto', 
                                    display: 'flex', 
                                    justifyContent: 'center', 
                                    alignItems: 'center',
                                    overflow: 'hidden'  
                                }}
                            >
                                <img 
                                    src={recipeData?.image} 
                                    alt={recipeData?.name} 
                                    style={{ 
                                        maxWidth: "100%", 
                                        height: "auto", 
                                        borderRadius: "50%" 
                                    }} 
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </SectionWrapper>
        </React.Fragment>
    );
};

export default RecipeDetails;
