export type ToolbarButtonColor =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success";

export interface ToolbarButton {
  label: string;
  icon: any;
  color: string;
}

export const RequestStatus = {
  Accepted: "accepted",
  Declined: "declined",
  InProgress: "inprogress",
  OnHold: "onhold",
} as const;

export interface PatientRequest {
  patientId: string;
  patientName: string;
  genericMedication: string;
  openRequestDate: string;
  catoDosage?: string;
  approvedDosage: string;
  updatedInventory?: number;
  numOfTreatments?: number;
  drugApprovalExpirationDate: string;
  doctorInCharge?: string;
  coordinatingNurse?: string;
  fundingFactor: string;
  updatesStatusDate: string;
  requestStatus: string;
}
