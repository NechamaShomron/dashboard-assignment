import React from "react";
import { Button, Box } from "@mui/material";
import RequestsTable from "../components/RequestsTable";
import {
  mockPatientRequests,
  mockPatientRequestsNotifications,
} from "../lib/mockData";
import { COLORS } from "../theme/colors";

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
      <Box sx={{ mb: 2, border: `2px solid ${COLORS.border}` }}>
        <RequestsTable
          data={mockPatientRequests}
          title="מטופלים בעלי בקשה"
          showSummary={true}
        />
      </Box>
      <Box sx={{ mb: 2, border: `2px solid ${COLORS.border}` }}>
        <RequestsTable
          data={mockPatientRequestsNotifications}
          title="התראות"
          showSummary={false}
        />
      </Box>
    </div>
  );
};

export default RequestsPage;
