import React from "react";
import {
  Box,
  Stack,
  Typography,
  Button,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { MailOutline } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ py: 6, px: { xs: 4, md: 12 }, bgcolor: "#F8FAFC" }}>
      {/* Top Section */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "stretch", md: "flex-start" }}
        spacing={4}
      >
        {/* Left Section */}

        <Box sx={{ flex: { xs: 1, md: "0 1 25%" } }}>
          <Typography variant="h5" fontWeight={700}>
            Prime<span style={{ color: "#007BFF" }}>Kit</span>
          </Typography>
          <Typography variant="body2" sx={{ mt: 2, color: "text.secondary" }}>
            In the fast-paced world of modern technology, many leadership
            executives and organizations understand that building.
          </Typography>
          <Typography variant="subtitle2" sx={{ mt: 2, fontWeight: 600 }}>
            Get Our Apps From:
          </Typography>
          <Stack direction="row" spacing={2} mt={2}>
            <Button
              variant="contained"
              endIcon={<AppleIcon />}
              sx={{
                bgcolor: "primary.main",
                color: "common.white",
                textTransform: "none",
                "&:hover": { bgcolor: "primary.dark" },
                px: 2,
                whiteSpace: "nowrap",
              }}
            >
              Apple Store
            </Button>
            <Button
              variant="outlined"
              endIcon={<PlayArrowIcon color="primary" />}
              sx={{
                color: "primary",
                borderColor: "primary",
                textTransform: "none",
                "&:hover": { borderColor: "primary" },
                px: 2,
                whiteSpace: "nowrap",
              }}
            >
              Play Store
            </Button>
          </Stack>
        </Box>

        {/* Quick Links */}

        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            Quick Links
          </Typography>
          <Stack spacing={1.5}>
            {[
              "About Us",
              "Services",
              "Pricing",
              "Privacy Policy",
              "Blogs",
              "Contact Us",
            ].map((item) => (
              <Typography
                key={item}
                variant="body2"
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "primary.main", cursor: "pointer" },
                }}
              >
                {item}
              </Typography>
            ))}
          </Stack>
        </Box>

        {/* Services */}

        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            Services
          </Typography>
          <Stack spacing={1.5}>
            {[
              "Online Payments",
              "Balance Transfer",
              "Payment Request",
              "Bank Withdraw",
              "Send Money",
              "Receive Money",
            ].map((item) => (
              <Typography
                key={item}
                variant="body2"
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "primary.main", cursor: "pointer" },
                }}
              >
                {item}
              </Typography>
            ))}
          </Stack>
        </Box>

        {/* Newsletter */}

        <Box sx={{ flex: { xs: 1, md: "0 1 25%" } }}>
          <Typography variant="h6" fontWeight={700} gutterBottom>
            Newsletter
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Sign up and receive the latest tips via email.
          </Typography>
          <Stack direction="column" spacing={1}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="  Enter Your Mail"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutline />
                  </InputAdornment>
                ),
              }}
              sx={{
                bgcolor: "common.white",
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "divider" },
                  "&:hover fieldset": { borderColor: "text.primary" },
                },
              }}
            />{" "}
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                bgcolor: "primary.main",
                color: "common.white",
                textTransform: "none",
                "&:hover": { bgcolor: "primary.dark" },
                whiteSpace: "nowrap",
                px: 2,
              }}
            >
              Subscribe Now
            </Button>
          </Stack>
        </Box>
      </Stack>

      {/* Bottom Section */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{
          mt: 6,
          pt: 3,
          borderTop: 1,
          borderColor: "divider",
        }}
      >
        <Stack direction="row" spacing={1}>
          <IconButton
            sx={{
              color: "text.secondary",
              "&:hover": { color: "primary.main" },
            }}
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            sx={{
              color: "text.secondary",
              "&:hover": { color: "primary.main" },
            }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            sx={{
              color: "text.secondary",
              "&:hover": { color: "primary.main" },
            }}
          >
            <TwitterIcon />
          </IconButton>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          © 2025 PrimeKit. All rights reserved
        </Typography>
      </Stack>
    </Box>
  );
};
export default Footer;
