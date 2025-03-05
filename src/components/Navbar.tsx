import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MenuIcon from "@mui/icons-material/Menu";

const Logo = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  fontSize: "24px",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: "#4F5B6E",
  marginLeft: theme.spacing(3),
  fontSize: "16px",
  textTransform: "none",
  "&:hover": {
    color: "#008AFF",
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: theme.spacing(1),
    fontSize: "14px",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = ["Start", "Features", "Solutions", "Pricing", "Contact"];

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem key={item}>
          <ListItemText
            primary={item}
            sx={{
              color: item === "Start" ? "#008AFF" : "#4F5B6E",

              "& .MuiTypography-root": { fontSize: "16px" },
            }}
          />
        </ListItem>
      ))}
      <ListItem>
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#008AFF",
            textTransform: "none",
            fontSize: "16px",
            padding: "8px 20px",
            borderRadius: "5px",
            boxShadow: "none",

            "&:hover": { backgroundColor: "#45A049" },
          }}
        >
          Download Now
        </Button>
      </ListItem>
    </List>
  );

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        borderBottom: "1px solid #e0e0e0",
        padding: {
          xs: "0 16px",
          sm: "0 32px",
          md: "0 64px",
          lg: "0 100px",
        },
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Logo>
          <span style={{ color: "#000000" }}>Prime</span>
          <span style={{ color: "#008AFF" }}>Kit</span>
        </Logo>
        {isMobile && (
          <Button color="inherit" onClick={() => setMobileOpen(!mobileOpen)}>
            <MenuIcon sx={{ color: "#000000" }} />
          </Button>
        )}
        <Box
          display="flex"
          alignItems="center"
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: { xs: isMobile ? "none" : "flex" },
          }}
        >
          {menuItems.map((item) => (
            <NavButton
              key={item}
              sx={{ color: item === "Start" ? "#008AFF" : undefined }}
            >
              {item}
            </NavButton>
          ))}
        </Box>
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "#008AFF",
            textTransform: "none",
            fontSize: { xs: "14px", sm: "16px" },
            padding: { xs: "6px 16px", sm: "8px 20px" },
            borderRadius: "5px",
            boxShadow: "none",
            display: { xs: isMobile ? "none" : "flex" },

            "&:hover": { backgroundColor: "#45A049" },
          }}
        >
          Download Now {!isTablet && <KeyboardArrowRightIcon sx={{ ml: 1 }} />}
        </Button>
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
              backgroundColor: "white",
              padding: "20px 0",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
