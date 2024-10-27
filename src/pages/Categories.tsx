//components
import CategoryCard from "@components/e-commerce/CategoryCard/CategortCard";
//mui
import { Container, Grid } from "@mui/material";
// redux
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";

import React, { useEffect } from "react";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );
  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);
  const handleExploreCategory = (categoryName: string) => {
    alert(`Exploring ${categoryName}`);
    // add logic
  };
  const categoriesList =
    records.length > 0
      ? records.map((record) => (
          <Grid item xs={12} sm={6} md={4}>
            <CategoryCard
              categoryName="Electronics"
              imageUrl="https://via.placeholder.com/140"
              onExplore={() => handleExploreCategory("Electronics")}
            />
          </Grid>
        ))
      : "there are no categories";
  return (
    <Container sx={{ marginTop: "2rem" }}>
      <Grid container spacing={4}>
        {categoriesList}
      </Grid>
    </Container>
  );
};

export default Categories;
