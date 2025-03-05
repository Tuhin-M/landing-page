import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Stack, useTheme, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import Screen1 from "../assets/images/Screen 1.png";
import Screen2 from "../assets/images/Screen 2.png";
import Screen3 from "../assets/images/Screen 3.png";
import Screen4 from "../assets/images/Screen 4.png";
import Screen5 from "../assets/images/Screen 5.png";

const images = [Screen1, Screen2, Screen3, Screen4, Screen5];

const AppShowcase = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrameId: number;

    if (scrollContainer) {
      const handleScroll = () => {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
        const maxScroll = scrollWidth - clientWidth;
        const itemWidth = scrollWidth / (images.length * 2);
        const newIndex = Math.round(scrollLeft / itemWidth) % images.length;
        setActiveIndex(newIndex);

        if (scrollLeft >= maxScroll) {
          scrollContainer.scrollLeft = 0;
        }
      };

      const startAutoScroll = () => {
        if (scrollContainer && isAutoScrolling) {
          scrollContainer.scrollLeft += 1;
          animationFrameId = requestAnimationFrame(startAutoScroll);
        }
      };

      scrollContainer.addEventListener("scroll", handleScroll);
      startAutoScroll();

      scrollContainer.addEventListener("mouseenter", () =>
        setIsAutoScrolling(false)
      );
      scrollContainer.addEventListener("mouseleave", () =>
        setIsAutoScrolling(true)
      );

      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
        scrollContainer.removeEventListener("mouseenter", () =>
          setIsAutoScrolling(false)
        );
        scrollContainer.removeEventListener("mouseleave", () =>
          setIsAutoScrolling(true)
        );
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [isAutoScrolling]);

  const handleDotClick = (index: number) => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const itemWidth = scrollContainer.scrollWidth / (images.length * 2);
      scrollContainer.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      });
      setActiveIndex(index);
      setIsAutoScrolling(false);
      setTimeout(() => setIsAutoScrolling(true), 1000);
    }
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        py: { xs: 2, sm: 3, md: 4 },
        px: { xs: 1, sm: 2, md: 2 },
        backgroundColor: "#F8FAFC",
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: "#007BFF",
          fontWeight: "bold",
          mb: { xs: 0.5, sm: 0.75, md: 1 },
          fontSize: { xs: "0.875rem", sm: "1rem", md: "1.1rem" },
        }}
      >
        APP INTERFACE
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          color: "#222",
          maxWidth: { xs: "100%", sm: "80%", md: 600 },
          mx: "auto",
          mb: { xs: 2, sm: 3, md: 4 },
          fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem", lg: "2.25rem" },
        }}
      >
        Choose The Offering That Works Best For You.
      </Typography>
      <Box
        ref={scrollRef}
        component={motion.div}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          gap: { xs: 0.5, sm: 1, md: 1.5 },
          px: { xs: 1.5, sm: 4, md: 8 },
          py: { xs: 2, sm: 2.5, md: 3 },
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          scrollBehavior: "smooth",
        }}
      >
        {[...images, ...images].map((src, index) => (
          <Box
            key={index}
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            sx={{
              flex: "0 0 auto",
              scrollSnapAlign: "center",
              width: { xs: "85%", sm: "45%", md: "30%", lg: "20%" },
              height: { xs: 300, sm: 400, md: 450, lg: 500 },
            }}
          >
            <img
              src={src}
              alt={`Mobile UI ${(index % images.length) + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                borderRadius: isMobile ? 12 : 16,
              }}
            />
          </Box>
        ))}
      </Box>
      <Stack
        direction="row"
        spacing={{ xs: 0.5, sm: 0.75, md: 1 }}
        justifyContent="center"
        sx={{ mt: { xs: 1, sm: 1.5, md: 2 } }}
      >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => handleDotClick(index)}
            sx={{
              width: { xs: 6, sm: 7, md: 8 },
              height: { xs: 6, sm: 7, md: 8 },
              borderRadius: "50%",
              backgroundColor: activeIndex === index ? "#007BFF" : "#CBD5E1",
              transition: "all 0.3s ease",
              cursor: "pointer",
              "&:hover": { transform: "scale(1.2)" },
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default AppShowcase;
