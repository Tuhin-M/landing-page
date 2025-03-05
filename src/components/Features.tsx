import React from "react";
import { Box, Card, Typography, Avatar } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import features from "../assets/images/features.png";

const Features = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        py: { xs: 2, sm: 2, md: 3, lg: 2, xl: 2 },
        px: { xs: 2, sm: 2, md: 3, lg: 6, xl: 8 },
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#fff",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          gap: { xs: 3, sm: 3, md: 2, lg: 4, xl: 6 },
          maxWidth: {
            xs: "100%",
            sm: "90%",
            md: "1200px",
            lg: "1400px",
            xl: "1600px",
          },
          width: "100%",
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "1 1 40%" },
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box
            component="img"
            src={features}
            alt="Features"
            sx={{
              maxWidth: { xs: "90%", md: "80%", lg: "70%", xl: "60%" },
              height: "auto",
              borderRadius: 2,
              objectFit: "contain",
            }}
          />
        </Box>
        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "1 1 50%" },
            ml: { xs: 0, md: 2, lg: 4, xl: 6 },
            width: "100%",
          }}
        >
          <Typography
            variant="overline"
            color="primary"
            fontWeight={700}
            align="left"
            ml={1}
            mt={3}
            sx={{
              fontSize: {
                xs: "0.75rem",
                sm: "0.875rem",
                lg: "1rem",
                xl: "1.125rem",
              },
            }}
          >
            GREAT FEATURES
          </Typography>
          <Typography
            variant="h5"
            fontWeight={700}
            mt={0.5}
            align="left"
            ml={1}
            sx={{
              fontSize: {
                xs: "1.5rem",
                sm: "1.75rem",
                md: "2rem",
                lg: "2.25rem",
                xl: "2.5rem",
              },
            }}
          >
            What Makes Us Special
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 2, sm: 2, md: 1.5, lg: 2, xl: 3 },
              mt: { xs: 2, sm: 2, md: 1 },
            }}
          >
            {[
              {
                icon: <AccountBalanceIcon sx={{ color: "#007BFF" }} />,
                title: "Transfer Your Balances",
                description:
                  "Lorem ipsum dolor sit a Captivate your guests with seamless experience.",
              },
              {
                icon: <RequestQuoteIcon sx={{ color: "#43A047" }} />,
                title: "Request a Payment",
                description:
                  "Lorem ipsum dolor sit a Captivate your guests with seamless experience.",
              },
              {
                icon: <PaymentIcon sx={{ color: "#FFA000" }} />,
                title: "Receiving Payments",
                description:
                  "Lorem ipsum dolor sit a Captivate your guests with seamless experience.",
              },
              {
                icon: <AccountBalanceIcon sx={{ color: "#673AB7" }} />,
                title: "Withdraw to Your Bank",
                description:
                  "Lorem ipsum dolor sit a Captivate your guests with seamless experience.",
              },
            ].map((feature, index) => (
              <Box
                key={index}
                sx={{
                  flex: {
                    xs: "1 1 100%",
                    sm: "0 0 calc(50% - 1rem)",
                    md: "0 0 calc(50% - 0.75rem)",
                    lg: "0 0 calc(50% - 1rem)",
                    xl: "0 0 calc(50% - 1.5rem)",
                  },
                }}
              >
                <Card
                  sx={{
                    p: { xs: 1.5, sm: 2, lg: 2.5, xl: 3 },
                    borderRadius: 2,
                    boxShadow: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: { xs: 1, sm: 1.5, lg: 2, xl: 2.5 },
                    height: "100%",
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: "transparent",
                      border: "1px solid",
                      p: { xs: 0.5, sm: 0.75, lg: 1, xl: 1.25 },
                      width: { xs: 28, sm: 32, lg: 36, xl: 40 },
                      height: { xs: 28, sm: 32, lg: 36, xl: 40 },
                    }}
                  >
                    {feature.icon}
                  </Avatar>
                  <Box sx={{ textAlign: "left" }}>
                    <Typography
                      variant="body2"
                      fontWeight={600}
                      sx={{
                        fontSize: {
                          xs: "0.875rem",
                          sm: "1rem",
                          lg: "1.125rem",
                          xl: "1.25rem",
                        },
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      color="gray"
                      sx={{
                        fontSize: {
                          xs: "0.75rem",
                          sm: "0.875rem",
                          lg: "1rem",
                          xl: "1.125rem",
                        },
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </Card>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Features;
