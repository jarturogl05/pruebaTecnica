import React from "react";
import AppBar from "@mui/material/AppBar";
import { Button, Container, Link, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

const navItems = [
  { name: "Home", url: "/" },
  { name: "logs", url: "/logs" },
];

function AppBarComponent() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            App
          </Typography>
          {navItems.map((navItem: any, index: number) => (
            <Button
              key={index}
              color="inherit"
              component={Link}
              href={navItem.url}
            >
              {navItem.name}
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      <Toolbar />
    </Box>
  );
}

export default AppBarComponent;
