import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import type { PatientRequest } from "../lib/types";
import ToolbarFilter from "./ToolbarFilter";

interface TableProps {
  data: PatientRequest[];
  title: string;
}

const MyTable: React.FC<TableProps> = ({ data, title }) => {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Button
          endIcon={<ArrowBackIosNewIcon fontSize="small" sx={{ mr: 1 }} />}
          sx={{
            color: "primary.main",
            textTransform: "none",
            fontWeight: "bold",
          }}
        >
          {title}
        </Button>
        <Box>
          <ToolbarFilter />
        </Box>
      </Box>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Patient Name</TableCell>
              <TableCell>Patient ID</TableCell>
              <TableCell>Medication</TableCell>
              <TableCell>Open Request Date</TableCell>
              <TableCell>Dosage</TableCell>
              <TableCell>Approved Dosage</TableCell>
              <TableCell>Updated Inventory</TableCell>
              <TableCell># Treatments</TableCell>
              <TableCell>Drug Expiry Date</TableCell>
              <TableCell>Doctor In Charge</TableCell>
              <TableCell>Coordinating Nurse</TableCell>
              <TableCell>Update Status Date</TableCell>
              <TableCell>Request Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.patientId}>
                <TableCell>{row.patientName}</TableCell>
                <TableCell>{row.patientId}</TableCell>
                <TableCell>{row.medication}</TableCell>
                <TableCell>{row.openRequestDate}</TableCell>
                <TableCell>{row.dosage}</TableCell>
                <TableCell>{row.approvedDosage}</TableCell>
                <TableCell>{row.updatedInventory}</TableCell>
                <TableCell>{row.numOfTreatments}</TableCell>
                <TableCell>{row.drugExpiryDate}</TableCell>
                <TableCell>{row.doctorInCharge}</TableCell>
                <TableCell>{row.coordinatingNurse}</TableCell>
                <TableCell>{row.updateStatusDate}</TableCell>
                <TableCell>{row.requestStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MyTable;
