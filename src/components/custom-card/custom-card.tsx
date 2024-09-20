import React from 'react';
import { Card, CardContent, Typography, Box, Rating, Chip } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';

interface RecipeCardProps {
    id?: number;
    title: string;
    time: number;
    receipeName: string;
    reviews: number;
    mealType: string[];
    rating: number;
    imageUrl: string;
    onClick: (data: any) => void
}


const CustomRecipeCard = ({ title, receipeName, time, mealType, reviews, rating, imageUrl, onClick }: RecipeCardProps) => {
    return (
        <Card sx={{ boxShadow: 1, width: "100%", height: "100%", cursor: "pointer" }} onClick={onClick}>
            <img src={imageUrl} alt={title} style={{ height: "257px", width: "100%" }} />
            <CardContent>
                <Typography>
                    {title}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1, flexWrap: "wrap" }}>
                    <Typography>
                        {receipeName}
                    </Typography>
                    <Chip
                        label={`Reviews: ${reviews}`}
                        color="success"
                        size="small"
                        sx={{ fontSize: '0.875rem' }}
                    />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1, flexWrap: "wrap" }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <AccessTimeIcon sx={{ mr: 0.5 }} fontSize="small" />
                        <Typography variant="body2" color="text.secondary">
                            {time}
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', mb: 1, gap: 3, flexWrap: "wrap" }}>
                        <Typography variant="body2" color="text.secondary">
                            {mealType}
                        </Typography>
                        <Rating
                            name="customized-10"
                            defaultValue={rating}
                            max={5}
                            precision={0.5}
                            size="small"
                            icon={<StarIcon fontSize="inherit" />}
                            emptyIcon={<StarIcon fontSize="inherit" />}
                        />
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default CustomRecipeCard;
