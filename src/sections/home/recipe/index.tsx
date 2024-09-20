import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import CustomRecipeCard from '../../../components/custom-card/custom-card';
import SectionWrapper from '../../../components/section-wrapper';
import { useNavigate } from 'react-router-dom';

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

type ApiResponse = {
    recipes: RecipeCardProps[];
};

const Recipe = () => {
    const [recipes, setRecipes] = useState<RecipeCardProps[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch("https://dummyjson.com/recipes");
                const data: ApiResponse = await response.json();
                setRecipes(data.recipes);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        };

        fetchRecipes();
    }, []);

    const handleDetailRecipe = (recipe: RecipeCardProps) => {
        navigate(`/home/recipe-details/${recipe.id}`, { state: { recipe } });
    };

    return (
        <SectionWrapper>
            <Box flexGrow={1}>
                <Grid container spacing={5}>
                    {recipes.map((recipe) => (
                        <Grid item key={recipe.id} xs={12} sm={6} md={4} xl={4} lg={4} mb={4}>
                            <CustomRecipeCard
                                onClick={() => handleDetailRecipe(recipe)}
                                title={recipe.name}
                                time={recipe.prepTimeMinutes}
                                receipeName={recipe.name}
                                reviews={recipe.reviewCount}
                                mealType={recipe.mealType}
                                rating={recipe.rating}
                                imageUrl={recipe.image}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </SectionWrapper>
    );
};

export default Recipe;
