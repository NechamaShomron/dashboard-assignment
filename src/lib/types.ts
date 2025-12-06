export interface SummaryBarItem {
  label: string;
  icon: any;
  color: string;
}

export const RequestStatus = {
  Accepted: "אושרה",
  Declined: "נדחתה",
  InProgress: "בטיפול",
  OnHold: "מושהה",
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
  hasMessages: boolean;
  doctorInCharge?: string;
  coordinatingNurse?: string;
  fundingFactor: string;
  mail: boolean;
  updatesStatusDate: string;
  requestStatus: string;
}
