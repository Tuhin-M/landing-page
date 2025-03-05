import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Professional & Experienced Team Member",
    answer:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters opposed to using.",
  },
  {
    question: "Our Main Goal How To Success In IT Business",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
  {
    question: "Our Main Goal How To Success In IT Business",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
  {
    question: "Our Main Goal How To Success In IT Business",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
  },
];

const FAQSection = () => {
  const [expanded, setExpanded] = useState<number | false>(0);

  const handleAccordionChange =
    (index: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? index : false);
    };

  return (
    <Box
      sx={{
        py: { xs: 4, sm: 5, md: 6 },
        px: { xs: 2, sm: 4, md: 8, lg: 16 },
        backgroundColor: "#F8FAFC",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 3, sm: 4 }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "center" }}
        sx={{ maxWidth: "1440px", mx: "auto" }}
      >
        <Stack
          spacing={{ xs: 1.5, sm: 2 }}
          sx={{
            maxWidth: { xs: "100%", sm: "80%", md: "40%" },
            width: "100%",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#007BFF",
              fontWeight: 500,
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
          >
            ANSWER TO
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 500,
              color: "#222",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            sx={{
              color: "#6B7280",
              fontSize: { xs: "0.875rem", sm: "1rem" },
            }}
          >
            There are many variations of passage of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#007BFF",
              textTransform: "none",
              width: { xs: "100%", sm: "150px" },
              fontSize: { xs: "0.875rem", sm: "1rem" },
              py: { xs: 1, sm: 1.5 },
            }}
          >
            Contact Us
          </Button>
        </Stack>

        <Stack
          spacing={{ xs: 1.5, sm: 2 }}
          sx={{
            width: { xs: "100%", md: "50%" },
          }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Accordion
                expanded={expanded === index}
                onChange={handleAccordionChange(index)}
                sx={{
                  borderRadius: "8px",
                  boxShadow: "none",
                  backgroundColor: "#fff",
                  "& .MuiAccordionSummary-content": {
                    margin: { xs: "12px 0", sm: "16px 0" },
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "#6B7280" }} />}
                >
                  <Typography
                    sx={{
                      fontWeight: expanded === index ? "bold" : "normal",
                      fontSize: { xs: "0.875rem", sm: "1rem" },
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      color: "#6B7280",
                      fontSize: { xs: "0.875rem", sm: "1rem" },
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default FAQSection;
