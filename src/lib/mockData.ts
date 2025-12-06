import {
  type PatientRequest,
  RequestStatus,
  type SummaryBarItem,
} from "./types";
import {
  EditCalendarOutlined as EditCalendarOutlinedIcon,
  TollOutlined as TollOutlinedIcon,
  Pause as PauseIcon,
  ForwardToInboxOutlined as ForwardToInboxOutlinedIcon,
  AllInclusiveOutlined as AllInclusiveOutlinedIcon,
  DoDisturbOutlined as DoDisturbOutlinedIcon,
} from "@mui/icons-material";

export const mockPatientRequests: PatientRequest[] = [
  {
    patientId: "318356985",
    patientName: "משה כהן",
    genericMedication: "ASPIRIN CARDIO",
    openRequestDate: "11.5.25",
    catoDosage: "60mg",
    approvedDosage: "60mg",
    numOfTreatments: 10,
    drugApprovalExpirationDate: "11.5.25",
    hasMessages: true,
    doctorInCharge: "רוית גבע",
    coordinatingNurse: "אחות רותי",
    fundingFactor: "חמלה",
    mail: true,
    updatesStatusDate: "11.5.25",
    requestStatus: RequestStatus.InProgress,
  },
  {
    patientId: "318346985",
    patientName: "יהודה כהן",
    genericMedication: "ATROVATSTAN",
    openRequestDate: "11.5.25",
    catoDosage: "60mg",
    approvedDosage: "60mg",
    numOfTreatments: 2,
    drugApprovalExpirationDate: "11.5.25",
    hasMessages: false,
    doctorInCharge: "רוית גבע",
    coordinatingNurse: "אחות רותי",
    fundingFactor: "מכבי",
    mail: true,
    updatesStatusDate: "11.5.25",
    requestStatus: RequestStatus.Declined,
  },
  {
    patientId: "318336985",
    patientName: "ליאור יהודאי",
    genericMedication: "ALDACTONE",
    openRequestDate: "11.5.25",
    catoDosage: "60mg",
    approvedDosage: "60mg",
    numOfTreatments: 6,
    drugApprovalExpirationDate: "11.5.25",
    hasMessages: true,
    doctorInCharge: "רוית גבע",
    coordinatingNurse: "אחות רותי",
    fundingFactor: "ביטוח בסיסי",
    mail: true,
    updatesStatusDate: "11.5.25",
    requestStatus: RequestStatus.Accepted,
  },
  {
    patientId: "318326985",
    patientName: "יעקב יעקבי",
    genericMedication: "ASPIRIN CARDIO",
    openRequestDate: "11.5.25",
    approvedDosage: "60mg",
    updatedInventory: 35.0,
    drugApprovalExpirationDate: "11.5.25",
    hasMessages: false,
    fundingFactor: "כללית",
    mail: true,
    updatesStatusDate: "1.4.25",
    requestStatus: RequestStatus.OnHold,
  },
];
export const mockPatientRequestsNotifications: PatientRequest[] = [
  {
    patientId: "318336985",
    patientName: "ליאור יהודאי",
    genericMedication: "ALDACTONE",
    openRequestDate: "11.5.25",
    catoDosage: "60mg",
    approvedDosage: "60mg",
    numOfTreatments: 6,
    drugApprovalExpirationDate: "11.5.25",
    hasMessages: true,
    doctorInCharge: "רוית גבע",
    coordinatingNurse: "אחות רותי",
    fundingFactor: "ביטוח בסיסי",
    mail: true,
    updatesStatusDate: "11.5.25",
    requestStatus: RequestStatus.Accepted,
  },
  {
    patientId: "318326985",
    patientName: "יעקב יעקבי",
    genericMedication: "ASPIRIN CARDIO",
    openRequestDate: "11.5.25",
    approvedDosage: "60mg",
    updatedInventory: 35.0,
    drugApprovalExpirationDate: "11.5.25",
    hasMessages: false,
    fundingFactor: "כללית",
    mail: true,
    updatesStatusDate: "1.4.25",
    requestStatus: RequestStatus.OnHold,
  },
];

export const summaryBar: SummaryBarItem[] = [
  {
    label: "הארכת תוקף - 15",
    icon: EditCalendarOutlinedIcon,
    color: "#99ebf2",
  },
  { label: "שינוי מינון - 15", icon: TollOutlinedIcon, color: "#cf62a3" },
  { label: "מושהה - 15", icon: PauseIcon, color: "#e1e08a" },
  {
    label: "נדרש מידע - 120",
    icon: ForwardToInboxOutlinedIcon,
    color: "#a4a5a7",
  },
  { label: "מסתיים - 120", icon: AllInclusiveOutlinedIcon, color: "#deb879" },
  { label: "נדחתה - 3", icon: DoDisturbOutlinedIcon, color: "#b8504a" },
];

export const patientRequestColumns = [
  { key: "patientName", label: "שם מטופל", sortable: true, filterable: true },
  { key: "patientId", label: "ת.ז", sortable: true, filterable: true },
  {
    key: "genericMedication",
    label: "תרופה גנרית",
    sortable: true,
    filterable: true,
  },
  { key: "openRequestDate", label: "פתיחת בקשה", sortable: true },
  { key: "catoDosage", label: "מינון CATO" },
  { key: "approvedDosage", label: "מינון מאושר" },
  { key: "updatedInventory", label: "מלאי מעודכן" },
  { key: "numOfTreatments", label: "מספר טיפולים" },
  {
    key: "drugApprovalExpirationDate",
    label: "תוקף אישור תרופה",
    sortable: true,
  },
  { key: "chat", label: "chat" },
  {
    key: "doctorInCharge",
    label: "רופא אחראי",
    sortable: true,
    filterable: true,
  },
  {
    key: "coordinatingNurse",
    label: "אחות מתאמת",
    sortable: true,
    filterable: true,
  },
  {
    key: "fundingFactor",
    label: "גורם מממן",
    sortable: true,
    filterable: true,
  },
  {
    key: "mail",
    label: "mail",
  },
  {
    key: "updatesStatusDate",
    label: "עדכון סטטוס",
    sortable: true,
  },
  {
    key: "requestStatus",
    label: "סטטוס בקשה",
    sortable: true,
    filterable: true,
  },
];

export const getStatusColor = (status: string) => {
  switch (status) {
    case RequestStatus.OnHold:
      return "#f5f5c2";
    case RequestStatus.Accepted:
      return "#d4f7df";
    case RequestStatus.Declined:
      return "#f6d5d1";
    default:
      return "#d2e7fc";
  }
};
