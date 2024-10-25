import CategoryCard from "@components/e-commerce/CategoryCard/CategortCard";
import { Container, Grid } from "@mui/material";
import React from "react";

const Categories = () => {
  const handleExploreCategory = (categoryName: string) => {
    alert(`Exploring ${categoryName}`);
    // add logic
  };
  return (
    <Container sx={{ marginTop: "2rem" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <CategoryCard
            categoryName="Electronics"
            imageUrl="https://via.placeholder.com/140"
            onExplore={() => handleExploreCategory("Electronics")}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CategoryCard
            categoryName="Fashion"
            imageUrl="https://via.placeholder.com/140"
            onExplore={() => handleExploreCategory("Fashion")}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CategoryCard
            categoryName="Home & Kitchen"
            imageUrl="https://via.placeholder.com/140"
            onExplore={() => handleExploreCategory("Home & Kitchen")}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Categories;
