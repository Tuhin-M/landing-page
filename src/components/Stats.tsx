import React from "react";
import { Box, Stack, Typography, Divider } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import StarIcon from "@mui/icons-material/Star";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

const stats = [
  {
    icon: (
      <GroupsIcon
        sx={{ fontSize: { xs: 30, sm: 35, md: 40 }, color: "#007BFF" }}
      />
    ),
    value: "47,595",
    label: "Users",
  },
  {
    icon: (
      <EmojiEmotionsIcon
        sx={{ fontSize: { xs: 30, sm: 35, md: 40 }, color: "#007BFF" }}
      />
    ),
    value: "34,797",
    label: "Happy Clients",
  },
  {
    icon: (
      <StarIcon
        sx={{ fontSize: { xs: 30, sm: 35, md: 40 }, color: "#007BFF" }}
      />
    ),
    value: "895",
    label: "Reviews",
  },
  {
    icon: (
      <CloudDownloadIcon
        sx={{ fontSize: { xs: 30, sm: 35, md: 40 }, color: "#007BFF" }}
      />
    ),
    value: "50,927",
    label: "App Download",
  },
];

const StatsSection = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: 3, sm: 4, md: 6 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", sm: "90%", md: "1200px" },
          backgroundColor: "#fff",
          borderRadius: 2,
          py: { xs: 2, sm: 3, md: 4 },
          px: { xs: 1, sm: 2, md: 6 },
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
          alignItems="center"
          spacing={{ xs: 3, sm: 4, md: 8 }}
          sx={{ flexWrap: "wrap" }}
        >
          {stats.map((stat, index) => (
            <Stack
              key={index}
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
              spacing={{ xs: 2, sm: 3, md: 5 }}
              sx={{ width: { xs: "100%", sm: "auto" }, textAlign: "center" }}
            >
              <Stack alignItems="center" spacing={{ xs: 1, sm: 1.5, md: 2 }}>
                {stat.icon}
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: "#222",
                    fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#666",
                    fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
                  }}
                >
                  {stat.label}
                </Typography>
              </Stack>
              {index < stats.length - 1 && (
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    height: { xs: "1px", sm: "80px", md: "100px" },
                    width: { xs: "80%", sm: "1px" },
                    bgcolor: "#ddd",
                    my: { xs: 2, sm: 0 },
                    display: { xs: "none", sm: "block" },
                  }}
                />
              )}
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default StatsSection;
