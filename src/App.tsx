import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import PageLayout from "./layout/PageLayout";
import RequestPage from "./pages/RequestsPage";

// Create MUI theme with RTL
const theme = createTheme({
  direction: "rtl",
});

const App: React.FC<{ children?: React.ReactNode }> = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div dir="rtl">
        <PageLayout>
          <RequestPage />
        </PageLayout>
      </div>
    </ThemeProvider>
  );
};

export default App;
