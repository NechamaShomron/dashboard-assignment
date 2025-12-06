import { Box, Button } from "@mui/material";
import { summaryBar } from "../lib/mockData";
import type { SummaryBarItem } from "../lib/types";

const SummaryBar = () => (
  <Box display="flex" gap={1}>
    {summaryBar.map((item: SummaryBarItem) => {
      return (
        <Button
          key={item.label}
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "black",
            borderColor: "#ccc",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1.5,
            "& .MuiButton-startIcon": {
              "& svg": {
                fontSize: 22,
              },
            },
          }}
          startIcon={
            <item.icon color={item.color} sx={{ color: item.color, mr: -2 }} />
          }
        >
          <span>{item.label}</span>
        </Button>
      );
    })}
  </Box>
);

export default SummaryBar;
