import React from "react";
import { Container, Typography, Button } from "@mui/material";
import {
  Link,
  useRouteError,
  useNavigate,
  isRouteErrorResponse,
} from "react-router-dom";

const Error: React.FC = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  let errorStatus: number;
  let errorStatusText: string;
  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Page Not Found";
  }
  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <Container
      sx={{
        textAlign: "center",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h1" component="div" gutterBottom>
        {errorStatus}
      </Typography>
      <Typography variant="h5" component="div" gutterBottom>
        {errorStatusText}
      </Typography>
      <Button
        size="small"
        variant="contained"
        color="primary"
        onClick={handleGoBack}
      >
        Go Back Home
      </Button>
    </Container>
  );
};

export default Error;
