import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const TopHeader: React.FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        height: 40,
        backgroundColor: "#ffffff",
        color: "black",
        borderBottom: "1px solid #e0e0e0",
        boxShadow: "none",
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        sx={{
          left: 35,
          gap: 1.5,
          pr: 2,
          minHeight: "40px !important",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#e0f2ff",
            px: 1,
            py: 0.3,
            borderRadius: 1,
            mr: 2,
          }}
        >
          <Typography sx={{ fontWeight: "bold", color: "black" }}>
            לוגו
          </Typography>
        </Box>
        <Typography sx={{ color: "#757575", fontSize: "0.85rem" }}>
          שם משתמש: פרופ' רוית גבע
        </Typography>
        <Typography sx={{ color: "#757575", fontSize: "0.85rem" }}>
          תפקיד: רופא
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopHeader;
