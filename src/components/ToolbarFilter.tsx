import { Box, Button } from "@mui/material";
import { toolbarButtons } from "../lib/mockData";
import type { ToolbarButton } from "../lib/types";

const ToolbarFilter = () => (
  <Box display="flex" gap={1}>
    {toolbarButtons.map((btn: ToolbarButton) => {
      return (
        <Button
          key={btn.label}
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
            <btn.icon color={btn.color} sx={{ color: btn.color, mr: -2 }} />
          }
        >
          <span>{btn.label}</span>
        </Button>
      );
    })}
  </Box>
);

export default ToolbarFilter;
