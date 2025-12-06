import { Box, IconButton, Typography, TextField } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const TableFooterUI = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        gap: 0.5,
        py: 0.5,
        color: "#9c9c9c",
      }}
    >
      <IconButton size="small">
        <ChevronRight fontSize="small" />
      </IconButton>
      <Typography variant="body2">עבור לדף</Typography>
      <TextField
        value={1}
        size="small"
        sx={{ width: 40 }}
        inputProps={{
          style: { textAlign: "center", padding: 2, fontSize: 12 },
        }}
      />
      <IconButton size="small">
        <ChevronLeft fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default TableFooterUI;
