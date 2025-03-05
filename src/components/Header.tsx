import React from "react";
import {
  Box,
  Typography,
  Button,
  Rating,
  CardMedia,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Security } from "@mui/icons-material";
import heroImage from "../assets/images/hero-image.png";
import google from "../assets/images/Google Play button.png";
import apple from "../assets/images/ios button.png";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("xl"));

  const handleGooglePlayClick = () => {
    window.open("https://play.google.com/store", "_blank");
  };

  const handleAppStoreClick = () => {
    window.open("https://www.apple.com/app-store/", "_blank");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
        maxWidth: { xl: "2560px" },
        margin: "0 auto",
      }}
    >
      <Box
        sx={{
          flex: 1,
          height: { xs: "auto", md: "100%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: {
            xs: "0 40px",
            sm: "0 60px",
            md: "0 80px",
            lg: "0 100px",
            xl: "0 140px",
          },
          maxWidth: { xl: "1200px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 1, xl: 2 },
            mb: { xs: 1, md: 2, xl: 3 },
          }}
        >
          <Security
            color="primary"
            fontSize={isMobile ? "small" : isDesktop ? "large" : "medium"}
          />
          <Typography
            variant={isMobile ? "caption" : isDesktop ? "body1" : "body2"}
            sx={{
              color: "primary.main",
            }}
          >
            100% Secure Payments
          </Typography>
        </Box>
        <Typography
          variant={isMobile ? "h5" : isTablet ? "h4" : isDesktop ? "h2" : "h3"}
          sx={{
            fontWeight: "400",
            mb: { xs: 2, md: 3, xl: 4 },
            lineHeight: 1.2,
            color: "text.primary",
            fontSize: { xl: "4.5rem" },
          }}
        >
          Make Online Payment Easily And Increase Your Business
        </Typography>
        <Typography
          variant={isMobile ? "body2" : isDesktop ? "h6" : "body1"}
          sx={{
            marginBottom: { xs: 3, md: 4, xl: 5 },
            color: "text.secondary",
            maxWidth: { xs: "600px", xl: "800px" },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendis
          varius enim in eros elementum tristique.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: { xs: 2, md: 3, xl: 4 },
            marginBottom: { xs: 3, md: 4, xl: 5 },
            flexDirection: { xs: "column", sm: "row" },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Button
            onClick={handleGooglePlayClick}
            sx={{
              padding: 0,
              minWidth: "auto",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <Box
              component="img"
              src={google}
              alt="Google Play"
              sx={{
                height: { xs: "40px", sm: "44px", md: "48px", xl: "56px" },
                maxWidth: "100%",
              }}
            />
          </Button>
          <Button
            onClick={handleAppStoreClick}
            sx={{
              padding: 0,
              minWidth: "auto",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <Box
              component="img"
              src={apple}
              alt="App Store"
              sx={{
                height: { xs: "40px", sm: "44px", md: "48px", xl: "56px" },
                maxWidth: "100%",
              }}
            />
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 2, md: 3, xl: 5 },
            flexDirection: { xs: "column", sm: "row" },
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, xl: 2 },
            }}
          >
            <Rating
              value={4.9}
              precision={0.1}
              readOnly
              size={isMobile ? "small" : isDesktop ? "large" : "medium"}
            />
            <Typography
              variant={isMobile ? "body2" : isDesktop ? "h6" : "body1"}
              color="text.secondary"
              sx={{ fontWeight: "medium" }}
            >
              (4.9)
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, xl: 2 },
            }}
          >
            <Rating
              value={4.5}
              precision={0.1}
              readOnly
              size={isMobile ? "small" : isDesktop ? "large" : "medium"}
            />
            <Typography
              variant={isMobile ? "body2" : isDesktop ? "h6" : "body1"}
              color="text.secondary"
              sx={{ fontWeight: "medium" }}
            >
              (4.5)
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          flex: 1,
          height: {
            xs: "300px",
            sm: "400px",
            md: "600px",
            lg: "800px",
            xl: "1000px",
          },
          width: { xs: "100%", md: "50%" },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          alt="Payment illustration"
          image={heroImage}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: { xs: "contain", md: "contain" },
            objectPosition: "center",
            transition: "transform 0.3s ease-in-out",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
      </Box>
    </Box>
  );
};
export default Header;
