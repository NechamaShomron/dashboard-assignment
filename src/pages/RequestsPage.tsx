import React from "react";
import { Button, Box } from "@mui/material";
import RequestsTable from "../components/RequestsTable";
import { mockPatientRequests } from "../lib/mockData";

const RequestsPage: React.FC = () => {
  return (
    <div>
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <Button variant="contained" color="primary">
          פתיחת בקשה חדשה
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{
            fontWeight: "bold",
          }}
        >
          הזמנה ע"י מחלקת אשפוז
        </Button>
      </Box>
      <RequestsTable data={mockPatientRequests} title="מטופלים בעלי בקשה" />
    </div>
  );
};

export default RequestsPage;
