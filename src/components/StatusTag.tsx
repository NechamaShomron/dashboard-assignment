import React from "react";
import { Chip } from "@mui/material";

interface StatusTagProps {
  status: string;
}

const StatusTag: React.FC<StatusTagProps> = ({ status }) => {
  const colors: Record<string, "success" | "error" | "info" | "warning"> = {
    accepted: "success",
    declined: "error",
    inprogress: "info",
    onhold: "warning",
  };

  return <Chip label={status} color={colors[status]} />;
};

export default StatusTag;
