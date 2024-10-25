import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";

interface CategoryCardProps {
  categoryName: string;
  imageUrl: string;
  onExplore: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  categoryName,
  imageUrl,
  onExplore,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        textAlign: "center",
        borderRadius: 3,
        boxShadow: 3,
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={imageUrl}
        alt={categoryName}
        sx={{ borderRadius: "12px 12px 0 0" }}
      />
      <CardContent
        sx={{
          backgroundColor: "linear-gradient(to bottom, #ffffff, #f0f0f0)",
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
          }}
        >
          {categoryName}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center", paddingBottom: "1rem" }}>
        <Button
          size="medium"
          variant="contained"
          color="primary"
          onClick={onExplore}
          sx={{
            textTransform: "none",
            fontWeight: "bold",
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "#115293",
            },
          }}
        >
          Explore
        </Button>
      </CardActions>
    </Card>
  );
};

export default CategoryCard;
