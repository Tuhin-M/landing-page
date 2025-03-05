import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Avatar,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jhon Smith",
    role: "Web Developer",
    text: "Lorem Ipsum is a simply dummy text of an the printing and type settings for has been the industry's standard dymu text the ever since unknown printer.",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Kumar Amar",
    role: "UI/UX Designer",
    text: "Lorem Ipsum is a simply dummy text of an the printing and type settings for has been the industry's standard dymu text the ever since unknown printer.",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Jesica Lirona",
    role: "Front End Developer",
    text: "Lorem Ipsum is a simply dummy text of an the printing and type settings for has been the industry's standard dymu text the ever since unknown printer.",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLaptop = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <Box
      sx={{
        py: { xs: 3, sm: 4, md: 5, lg: 6, xl: 8 },
        px: { xs: 2, sm: 4, md: 10, lg: 12, xl: 16 },
        backgroundColor: "#FFF",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        spacing={{ xs: 2, sm: 0 }}
        sx={{ mb: { xs: 3, sm: 4, lg: 5 } }}
      >
        <Stack
          spacing={2}
          alignItems="flex-start"
          sx={{ maxWidth: { xs: "100%", sm: "70%", md: "50%" } }}
        >
          <Typography
            variant="body2"
            sx={{ color: "#6B7280", fontWeight: "bold" }}
          >
            TESTIMONIAL
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#222",
              fontSize: {
                xs: "1.5rem",
                sm: "1.75rem",
                md: "2rem",
                lg: "2.25rem",
                xl: "2.5rem",
              },
            }}
          >
            See What Others Have to Say About Us
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1}>
          <IconButton
            onClick={handlePrev}
            sx={{
              backgroundColor: "#00BAFF",
              color: "#fff",
              "&:hover": { backgroundColor: "#0067d2" },
              width: { xs: 35, sm: 40, md: 45, lg: 50 },
              height: { xs: 35, sm: 40, md: 45, lg: 50 },
            }}
          >
            <ArrowBackIcon
              sx={{ fontSize: { xs: 20, sm: 24, md: 28, lg: 32 } }}
            />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              backgroundColor: "#007BFF",
              color: "#fff",
              "&:hover": { backgroundColor: "#0067d2" },
              width: { xs: 35, sm: 40, md: 45, lg: 50 },
              height: { xs: 35, sm: 40, md: 45, lg: 50 },
            }}
          >
            <ArrowForwardIcon
              sx={{ fontSize: { xs: 20, sm: 24, md: 28, lg: 32 } }}
            />
          </IconButton>
        </Stack>
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 1, sm: 1.5, md: 2, lg: 3 }}
        sx={{
          mt: { xs: 3, sm: 4, lg: 5 },
          flexWrap: "nowrap",
          overflowX: "hidden",
        }}
      >
        {getVisibleTestimonials().map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            style={{
              flex: "0 0 auto",
              width: isMobile
                ? "260px"
                : isTablet
                ? "280px"
                : isLaptop
                ? "320px"
                : isDesktop
                ? "400px"
                : "450px",
              maxWidth: "100%",
            }}
          >
            <Box
              sx={{
                p: { xs: 2, sm: 2.5, md: 3, lg: 4 },
                borderRadius: "8px",
                backgroundColor: index === 1 ? "#007BFF" : "#F3F4F6",
                color: index === 1 ? "#fff" : "#374151",
                position: "relative",
                boxShadow:
                  index === 1 ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontSize: {
                    xs: "1.5rem",
                    sm: "1.75rem",
                    md: "2rem",
                    lg: "2.25rem",
                  },
                  opacity: 0.5,
                }}
              >
                "
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 2,
                  fontSize: {
                    xs: "0.875rem",
                    sm: "0.9rem",
                    md: "1rem",
                    lg: "1.1rem",
                  },
                }}
              >
                {testimonial.text}
              </Typography>
              <Box
                sx={{
                  position: "absolute",
                  bottom: -10,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 0,
                  height: 0,
                  borderLeft: "10px solid transparent",
                  borderRight: "10px solid transparent",
                  borderTop: `10px solid ${
                    index === 1 ? "#007BFF" : "#F3F4F6"
                  }`,
                }}
              />
            </Box>

            <Stack
              direction="row"
              alignItems="center"
              spacing={{ xs: 1, sm: 1.5, md: 2, lg: 2.5 }}
              sx={{ mt: { xs: 1, sm: 1.5, lg: 2 } }}
            >
              <Avatar
                src={testimonial.img}
                sx={{
                  width: { xs: 40, sm: 45, md: 50, lg: 60 },
                  height: { xs: 40, sm: 45, md: 50, lg: 60 },
                }}
              />
              <Stack>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "bold",
                    fontSize: {
                      xs: "0.9rem",
                      sm: "1rem",
                      md: "1.1rem",
                      lg: "1.2rem",
                    },
                  }}
                >
                  {testimonial.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#6B7280",
                    fontSize: {
                      xs: "0.8rem",
                      sm: "0.85rem",
                      md: "0.9rem",
                      lg: "1rem",
                    },
                  }}
                >
                  {testimonial.role}
                </Typography>
              </Stack>
            </Stack>
          </motion.div>
        ))}
      </Stack>
    </Box>
  );
};

export default Testimonials;
