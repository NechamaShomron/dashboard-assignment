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
  IconButton,
  Typography,
  Chip,
  Badge,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import type { PatientRequest } from "../lib/types";
import SummaryBar from "./SummaryBar";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import { getStatusColor, patientRequestColumns } from "../lib/mockData";
import TableFooterUI from "./TableFooterUI";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { COLORS } from "../theme/colors";

interface TableProps {
  data: PatientRequest[];
  title: string;
  showSummary: boolean;
}

const MyTable: React.FC<TableProps> = ({ data, title, showSummary }) => {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        mt={1}
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
        {showSummary && (
          <Box ml={1.5}>
            <SummaryBar />
          </Box>
        )}
      </Box>
      <TableContainer component={Paper} dir="rtl">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              {patientRequestColumns.map((col) => (
                <TableCell key={col.key}>
                  <Box display="flex" alignItems="center">
                    <Box display="flex">
                      {col.sortable && (
                        <Box
                          display="flex"
                          flexDirection="column"
                          alignItems="center"
                          sx={{
                            opacity: 0.4,
                            whiteSpace: "nowrap",
                            cursor: "pointer",
                          }}
                        >
                          <KeyboardArrowUpOutlinedIcon sx={{ fontSize: 16 }} />
                          <KeyboardArrowDownOutlinedIcon
                            sx={{ fontSize: 16, mt: "-4px" }}
                          />
                        </Box>
                      )}
                      {col.filterable && (
                        <IconButton size="small">
                          <FilterAltOutlinedIcon sx={{ fontSize: 20 }} />{" "}
                        </IconButton>
                      )}
                    </Box>
                    {col.key === "mail" ? (
                      <MailOutlineOutlinedIcon
                        fontSize="small"
                        sx={{ color: COLORS.lightBlue }}
                      />
                    ) : col.key === "chat" ? (
                      <QuestionAnswerOutlinedIcon
                        fontSize="small"
                        sx={{ color: COLORS.grey }}
                      />
                    ) : (
                      <Typography
                        sx={{
                          opacity: 0.7,
                          mr: 0.5,
                          lineHeight: 1.2,
                          whiteSpace: "normal",
                          display: "inline-block",
                          textAlign: "center",
                        }}
                      >
                        {col.label}
                      </Typography>
                    )}
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((row, idx) => (
              <TableRow
                key={idx}
                hover
                sx={{
                  backgroundColor: idx % 2 === 0 ? "#f3f4f8" : "white",
                  "& td": {
                    borderBottom: "none",
                    ...((idx === 0 || idx === 3) && {
                      paddingY: "10px !important",
                    }),
                  },
                }}
              >
                <TableCell>
                  <IconButton size="small">
                    <Typography
                      variant="h6"
                      sx={{ lineHeight: 1, color: "#105ead" }}
                    >
                      +
                    </Typography>
                  </IconButton>
                </TableCell>

                {patientRequestColumns.map((col) => (
                  <TableCell key={col.key}>
                    {col.key === "requestStatus" ? (
                      <Chip
                        label={
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 0.5,
                            }}
                          >
                            {row[col.key as keyof PatientRequest]}
                            <KeyboardArrowDownOutlinedIcon
                              sx={{ fontSize: 16 }}
                            />
                          </Box>
                        }
                        size="small"
                        sx={{
                          backgroundColor: getStatusColor(
                            String(row[col.key as keyof PatientRequest])
                          ),
                          fontWeight: 500,
                          borderRadius: 2,
                          px: 1,
                          py: 0.5,
                        }}
                      />
                    ) : col.key === "chat" ? (
                      row.hasMessages ? (
                        <Badge
                          badgeContent={1}
                          color="success"
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "left",
                          }}
                          sx={{
                            "& .MuiBadge-badge": {
                              minWidth: 12,
                              height: 12,
                              fontSize: 10,
                              top: "10%",
                              left: -6,
                              transform: "translate(0, -50%)",
                              backgroundColor: COLORS.notification,
                              color: "white",
                              padding: 0,
                            },
                          }}
                        >
                          <QuestionAnswerOutlinedIcon
                            fontSize="small"
                            sx={{ color: COLORS.notification }}
                          />
                        </Badge>
                      ) : (
                        <QuestionAnswerOutlinedIcon
                          fontSize="small"
                          sx={{ color: COLORS.grey }}
                        />
                      )
                    ) : col.key === "mail" ? (
                      <MailOutlineOutlinedIcon
                        fontSize="small"
                        sx={{ color: COLORS.lightBlue }}
                      />
                    ) : (
                      <Typography sx={{ textAlign: "center" }}>
                        {row[col.key as keyof PatientRequest] ?? ""}
                      </Typography>
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooterUI />
      </TableContainer>
    </Box>
  );
};

export default MyTable;
