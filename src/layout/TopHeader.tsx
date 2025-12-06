import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import { COLORS } from "../theme/colors";

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
          pr: 2,
          pl: 2,
          minHeight: "40px !important",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mr: -2 }}>
          <Box
            sx={{
              backgroundColor: "#e0f2ff",
              px: 1,
              py: 0.3,
              borderRadius: 1,
              ml: 2,
            }}
          >
            <Typography sx={{ fontWeight: "bold", color: "black" }}>
              לוגו
            </Typography>
          </Box>

          <Typography sx={{ color: COLORS.lightGrey, fontSize: "0.85rem" }}>
            שם משתמש: פרופ' רוית גבע
          </Typography>
          <Typography sx={{ color: COLORS.lightGrey, fontSize: "0.85rem" }}>
            תפקיד: רופא
          </Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography sx={{ color: COLORS.lightGrey, fontSize: "0.85rem" }}>
            09.04.2025 | 14:00
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Typography sx={{ color: COLORS.lightGrey, fontSize: "0.85rem" }}>
              יציאה
            </Typography>
            <LoginOutlinedIcon
              fontSize="small"
              sx={{ color: COLORS.lightGrey }}
            />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopHeader;
