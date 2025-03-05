import React from "react";
import { Box, Stack, Typography, Avatar } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import SpeedIcon from "@mui/icons-material/Speed";
import PaymentsIcon from "@mui/icons-material/Payments";
import aboutImage from "../assets/images/features.png";

const features = [
  {
    icon: (
      <AccountBalanceWalletIcon
        sx={{ fontSize: { xs: 24, sm: 28, md: 32 }, color: "#007BFF" }}
      />
    ),
    title: "A New Global Payment System",
    description:
      "Lorem ipsum dolor sit a Captivate your guests with seamless, browsing experience across all devices.",
  },
  {
    icon: (
      <PaymentsIcon
        sx={{ fontSize: { xs: 24, sm: 28, md: 32 }, color: "#007BFF" }}
      />
    ),
    title: "Your Money Arrives Instantly",
    description:
      "Lorem ipsum dolor sit a Captivate your guests with seamless, browsing experience across all devices.",
  },
  {
    icon: (
      <SpeedIcon
        sx={{ fontSize: { xs: 24, sm: 28, md: 32 }, color: "#007BFF" }}
      />
    ),
    title: "Payment Faster Than Others",
    description:
      "Lorem ipsum dolor sit a Captivate your guests with seamless, browsing experience across all devices.",
  },
];

const About = () => (
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
      px: { xs: 2, sm: 4, md: 8, lg: 16 },
      py: { xs: 4, sm: 5, md: 6 },
      gap: { xs: 4, md: 6 },
    }}
  >
    <Box
      sx={{ flex: 1, textAlign: { xs: "center", md: "left" }, width: "100%" }}
    >
      <Typography
        variant="overline"
        sx={{
          color: "#007BFF",
          fontWeight: 600,
          fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.875rem" },
        }}
      >
        ABOUT BESTKIT
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 500,
          mt: 1,
          color: "#222",
          maxWidth: "600px",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
          mx: { xs: "auto", md: 0 },
        }}
      >
        Connecting All Your Daily Payment Needs Easily With Bestkit
      </Typography>

      <Stack
        spacing={{ xs: 2, sm: 2.5, md: 3 }}
        sx={{ mt: { xs: 3, sm: 3.5, md: 4 } }}
      >
        {features.map((feature, index) => (
          <Stack
            key={index}
            direction="row"
            spacing={{ xs: 1.5, sm: 2 }}
            alignItems="center"
            sx={{ textAlign: "left" }}
          >
            <Avatar
              sx={{
                bgcolor: "#E3F2FD",
                width: { xs: 48, sm: 56, md: 64 },
                height: { xs: 48, sm: 56, md: 64 },
                border: "4px solid rgba(0, 123, 255, 0.2)",
                boxShadow: "0 0 15px rgba(0, 123, 255, 0.4)",
              }}
            >
              {feature.icon}
            </Avatar>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  color: "#222",
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#555",
                  maxWidth: { xs: "100%", sm: 300, md: 350 },
                  fontSize: { xs: 11, sm: 12, md: 13 },
                  fontWeight: 500,
                }}
              >
                {feature.description}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Stack>
    </Box>

    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        position: "relative",
        mt: { xs: 4, md: 0 },
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: { xs: 250, sm: 300, md: 350 },
          height: { xs: 250, sm: 300, md: 350 },
          bgcolor: "#E3F2FD",
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      />
      <Box
        component="img"
        src={aboutImage}
        alt="Phone UI"
        sx={{
          width: "100%",
          maxWidth: { xs: 200, sm: 250, md: 300 },
          position: "relative",
          zIndex: 2,
        }}
      />
    </Box>
  </Box>
);

export default About;
