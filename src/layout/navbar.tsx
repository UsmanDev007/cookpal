import React, { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Link } from "react-router-dom";
import { Button, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { key: 1, label: "Community", path: "#" },
  { key: 2, label: "Books", path: "#" },
  { key: 3, label: "Receipe Index", path: "#" },
  { key: 4, label: "Popular", path: "#" },
];


interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };




  const drawer = (
    <Box
      // onClick={handleDrawerToggle}
      sx={{
        textAlign: "center", padding: "20px",
        background: "#000000", boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)'
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "end" }} mb={3}>
        <IconButton onClick={handleDrawerToggle} >
          <CloseIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Box>
      <List>
        {navItems?.map((item: any) => (
          <ListItem key={item?.label} disablePadding>
            <ListItemButton>
              <Link
                to={`${item?.path}`}
                style={{
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "400",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  margin: "7px 0px",
                }}
              >
                {item?.label}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box mb={1}>
        <Button sx={{
          width: "100%", heighXt: "50px", borderRadius: "8px", color: "#fff", "&:hover": {
            backgroundColor: "transparent",
          },
        }} startIcon={<LoginIcon
          sx={{ color: "#509E2F" }} />}>
          Register
        </Button>
      </Box>

      <Button sx={{
        width: "100%", height: "50px", borderRadius: "8px", color: "#fff", "&:hover": {
          backgroundColor: "transparent",
        },
      }} startIcon={<PersonIcon
        sx={{ color: "#509E2F" }} />}>
        Login
      </Button>
    </Box>
  );
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex", background: "#000000", boxShadow: '0px 4px 10px 0px rgba(0, 0, 0, 0.25)' }}>
      <CssBaseline />
      <Box sx={{ width: "100%" }}>
        <Toolbar disableGutters>
          <Grid
            container
            sx={{ justifyContent: { lg: "space-between" } }}
            alignItems={"center"}
          >
            <Grid item xs={1} sx={{ display: { xs: "block", sm: "block", md: "block", lg: "none", xl:"none" } }} ml={1.5}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon style={{ color: "#fff" }} />
              </IconButton>
            </Grid>
            <Grid
              item
              lg={6}
              xl={6}
              md={5}
              sm={5}
              sx={{ display: { xs: "none", lg: "flex" }, width: "100%", marginLeft: { xl: 4, lg: 4, md: 2, sm: 0, xs: 0 } }}

            >
              <Box
                sx={{ flexGrow: 1, display: "flex", justifyContent: { lg: "start", xl: "start" } }}
              >
                {navItems?.map((item: any) => (
                  <Button
                    key={item?.label}
                    // onClick={handleCloseNavMenu}
                    sx={{
                      mx: 2,
                      display: "block",
                      fontWeight: "400",
                      "&:hover": {
                        backgroundColor: "transparent", // Change this to your desired hover color
                      },
                    }}
                  >
                    <Link
                      to={`${item?.path}`}
                      className="navLinks"
                      style={{
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "10px",
                        lineHeight: "12.19px",
                        textDecoration: "none",

                      }}
                    >
                      {item?.label}
                    </Link>
                  </Button>
                ))}
              </Box>
            </Grid>
            <Grid item xs lg={3} xl={3} md={2} sm={2} sx={{ width: "100%", marginRight: { xl: 4, lg: 4, md: 2, sm: 0, xs: 0 }}}>
              <Box
                sx={{
                  flexGrow: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  justifyContent: { xs: "end" },
                }}
              >

                <Box sx={{ display: { xs: "none", lg: "block" } }}>
                  <Button sx={{
                    width: "100%", heighXt: "50px", borderRadius: "8px",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "10px",
                    lineHeight: "12.19px",
                    textAlign: "center",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }} startIcon={<LoginIcon
                    sx={{ color: "#509E2F" }} />}>
                    Register
                  </Button>
                </Box>

                <Box sx={{
                  display: { xs: "none", lg: "block" }
                }}>
                  <Button sx={{
                    width: "100%", height: "50px", borderRadius: "8px",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "10px",
                    lineHeight: "12.19px",
                    textAlign: "center",
                    "&:hover": {
                      backgroundColor: "transparent",
                    },
                  }} startIcon={<PersonIcon
                    sx={{ color: "#509E2F" }} />}>
                    Login
                  </Button>
                </Box>

              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </Box>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;
