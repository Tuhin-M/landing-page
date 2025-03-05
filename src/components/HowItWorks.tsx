import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import BuildIcon from "@mui/icons-material/Build";
import PaymentIcon from "@mui/icons-material/Payment";

const steps = [
  {
    icon: (
      <CloudDownloadIcon
        sx={{ fontSize: { xs: 40, sm: 45, md: 50 }, color: "#007BFF" }}
      />
    ),
    title: "Install Our The App",

    description:
      "Use community groups to motivate and inspire, or promote your services and drive revenue.",
  },
  {
    icon: (
      <BuildIcon
        sx={{ fontSize: { xs: 40, sm: 45, md: 50 }, color: "#007BFF" }}
      />
    ),
    title: "Set Up Your Account",

    description:
      "Use community groups to motivate and inspire, or promote your services and drive revenue.",
  },
  {
    icon: (
      <PaymentIcon
        sx={{ fontSize: { xs: 40, sm: 45, md: 50 }, color: "#007BFF" }}
      />
    ),
    title: "Secure Payments",

    description:
      "Use community groups to motivate and inspire, or promote your services and drive revenue.",
  },
];

const HowItWorks = () => (
  <Box
    sx={{
      textAlign: "center",
      padding: { xs: 2, sm: 4, md: 6, lg: 8 },
      backgroundColor: "#fff",
    }}
  >
    <Typography
      variant="overline"
      sx={{
        color: "#007BFF",
        fontWeight: 600,
        fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.875rem" },
      }}
    >
      HOW DOES IT WORKS?
    </Typography>
    <Typography
      variant="h4"
      sx={{
        fontWeight: 500,
        mt: 1,
        color: "#222",
        fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem", lg: "2.5rem" },
      }}
    >
      Follow Some Simple Steps <br /> For Using Bestkit
    </Typography>

    <Grid
      container
      spacing={{ xs: 2, sm: 3, md: 4 }}
      sx={{ mt: { xs: 2, sm: 3, md: 4 } }}
    >
      {steps.map((step, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Box
            sx={{
              p: { xs: 2, sm: 3 },
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: { xs: 60, sm: 70, md: 80 },
                height: { xs: 60, sm: 70, md: 80 },
                borderRadius: "50%",
                background: "#E3F2FD",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: { xs: 1.5, sm: 2 },
              }}
            >
              {step.icon}
            </Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "#222",
                fontSize: { xs: "1.1rem", sm: "1.2rem", md: "1.25rem" },
                mb: 1,
              }}
            >
              {step.title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#555",
                maxWidth: { xs: "100%", sm: "90%", md: "300px" },
                fontSize: { xs: "0.875rem", sm: "0.9rem", md: "1rem" },
              }}
            >
              {step.description}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default HowItWorks;
