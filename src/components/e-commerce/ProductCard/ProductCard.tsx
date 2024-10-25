// src/components/ProductCard.tsx
import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  imageUrl,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 2,
        boxShadow: 3,
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={imageUrl}
        alt={title}
        sx={{ filter: "brightness(0.9)" }}
      />
      <CardContent
        sx={{
          backgroundColor: "#f9f9f9",
          paddingBottom: "16px",
          paddingTop: "16px",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontWeight: "bold",
            fontSize: "1.25rem",
            color: "#333",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: "center", marginBottom: "8px" }}
        >
          {description}
        </Typography>
        <Typography
          variant="h6"
          component="div"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#1976d2",
            marginTop: "8px",
          }}
        >
          {price}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", paddingBottom: "16px" }}>
        <Button
          size="medium"
          variant="contained"
          color="primary"
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            marginRight: "8px",
            "&:hover": {
              backgroundColor: "#115293",
            },
          }}
        >
          Add to Cart
        </Button>
        <Button
          size="medium"
          variant="outlined"
          color="secondary"
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#f3f3f3",
            },
          }}
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
