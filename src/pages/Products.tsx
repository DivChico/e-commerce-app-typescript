import ProductCard from "@components/e-commerce/ProductCard/ProductCard";
import { Container, Grid } from "@mui/material";
import React from "react";

const Products = () => {
  return (
    <Container sx={{ marginTop: "2rem" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <ProductCard
            title="Product 1"
            description="This is a great product."
            price="$19.99"
            imageUrl="https://via.placeholder.com/140"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProductCard
            title="Product 2"
            description="Another amazing product."
            price="$29.99"
            imageUrl="https://via.placeholder.com/140"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ProductCard
            title="Product 3"
            description="Best product in the market."
            price="$39.99"
            imageUrl="https://via.placeholder.com/140"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Products;
