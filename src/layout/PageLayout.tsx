import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import TopHeader from "./TopHeader";

const PageLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "row-reverse", minHeight: "100vh" }}
    >
      <Sidebar />
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <TopHeader />
        <Box sx={{ p: 2, mt: "2%", mr: "3%", width: "100%" }}>{children}</Box>
      </Box>
    </Box>
  );
};

export default PageLayout;
