import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";

// Menu items
const pages = ["Home", "About", "Services", "Contact"];

 const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static"
  elevation={0}
  sx={{ backgroundColor: "white" }}
  className="shadow-md">
      <Toolbar className="flex justify-between">
        {/* Brand / Logo */}
        <Typography
         
        >
         <img
    src="degic 1.png"   // if logo is in public folder
    alt="Logo"
    className="w-[100px] h-[100px] "
  />
        </Typography>

        {/* Mobile Menu */}
        <Box className="flex md:hidden">
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon className="text-black" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            className="md:hidden"
          >
            {pages.map((page,index) => (
              <MenuItem key={index} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
            <MenuItem onClick={handleCloseNavMenu}>
              <Button
                variant="contained"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
              >
                Sign In
              </Button>
            </MenuItem>
          </Menu>
        </Box>

        {/* Desktop Menu */}
        {/* <Box className="hidden md:flex gap-6 items-center">
          {pages.map((page) => (
            <Button
              key={page}
              onClick={handleCloseNavMenu}
              className="text-white font-medium "
            >
              {page}
            </Button>
          ))}
          <Button
            variant="contained"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Sign In
          </Button>
        </Box> */}
        <Box className="hidden md:flex gap-6 items-center">
  {pages.map((page,index) => (
    <Typography
      key={index}
      className="cursor-pointer text-black font-medium hover:text-red-600"
    >
      {page}
    </Typography>
  ))}
  <Button
    variant="contained"
    className="bg-[#2AB691] hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
  >
    Sign In
  </Button>
</Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;