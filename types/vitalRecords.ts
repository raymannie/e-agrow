// src/types/vitalRecords.ts

export type CertificateType = "birth" | "death";
export type ApplicationStatus =
  | "draft"
  | "submitted"
  | "under_review"
  | "approved"
  | "rejected"
  | "ready_for_collection"
  | "issued";
export type PaymentStatus = "pending" | "processing" | "completed" | "failed";
export type DeliveryMethod = "collection" | "postal" | "digital";

// Birth Certificate Types
export interface BirthCertificateApplication {
  id: string;
  applicationNumber: string;
  applicationType: "birth";
  status: ApplicationStatus;

  // Child Information
  childInfo: {
    firstName: string;
    middleName?: string;
    lastName: string;
    dateOfBirth: string;
    placeOfBirth: string;
    gender: "male" | "female";
    timeOfBirth?: string;
    multipleBirth?: boolean;
    birthOrder?: number;
  };

  // Parents Information
  motherInfo: {
    firstName: string;
    middleName?: string;
    lastName: string;
    maidenName?: string;
    dateOfBirth: string;
    nationality: string;
    occupation?: string;
    address: string;
    phone: string;
  };

  fatherInfo: {
    firstName: string;
    middleName?: string;
    lastName: string;
    dateOfBirth: string;
    nationality: string;
    occupation?: string;
    address: string;
    phone: string;
  };

  // Applicant Information
  applicantInfo: {
    name: string;
    relationship: "mother" | "father" | "guardian" | "legal_representative";
    email: string;
    phone: string;
    address: string;
    idNumber?: string;
  };

  // Supporting Documents
  documents: {
    hospitalBirthRecord?: string;
    parentsMarriageCertificate?: string;
    parentsIds?: string[];
    applicantId?: string;
    otherDocuments?: string[];
  };

  // Certificate Details
  certificateInfo?: {
    certificateNumber: string;
    issueDate: string;
    issuedBy: string;
    digitalCopyUrl?: string;
  };

  // Application Metadata
  deliveryMethod: DeliveryMethod;
  deliveryAddress?: string;
  payment: PaymentInfo;
  submittedDate?: string;
  approvedDate?: string;
  rejectionReason?: string;
  createdAt: string;
  updatedAt: string;
}

// Death Certificate Types
export interface DeathCertificateApplication {
  id: string;
  applicationNumber: string;
  applicationType: "death";
  status: ApplicationStatus;

  // Deceased Information
  deceasedInfo: {
    firstName: string;
    middleName?: string;
    lastName: string;
    dateOfBirth: string;
    dateOfDeath: string;
    placeOfDeath: string;
    timeOfDeath?: string;
    age: number;
    gender: "male" | "female";
    maritalStatus: "single" | "married" | "divorced" | "widowed";
    occupation?: string;
    lastResidentialAddress: string;
    nationality: string;
  };

  // Cause of Death
  deathInfo: {
    causeOfDeath: string;
    mannerOfDeath:
      | "natural"
      | "accident"
      | "suicide"
      | "homicide"
      | "pending"
      | "unknown";
    placeType: "hospital" | "home" | "nursing_home" | "other";
    attendingPhysician?: string;
    medicalFacility?: string;
  };

  // Next of Kin / Informant
  informantInfo: {
    name: string;
    relationship: string;
    email: string;
    phone: string;
    address: string;
    idNumber?: string;
  };

  // Applicant Information (if different from informant)
  applicantInfo: {
    name: string;
    relationship: string;
    email: string;
    phone: string;
    address: string;
    idNumber?: string;
  };

  // Supporting Documents
  documents: {
    medicalCertificate?: string;
    hospitalReport?: string;
    deceasedId?: string;
    informantId?: string;
    burialPermit?: string;
    otherDocuments?: string[];
  };

  // Certificate Details
  certificateInfo?: {
    certificateNumber: string;
    issueDate: string;
    issuedBy: string;
    digitalCopyUrl?: string;
  };

  // Application Metadata
  deliveryMethod: DeliveryMethod;
  deliveryAddress?: string;
  payment: PaymentInfo;
  submittedDate?: string;
  approvedDate?: string;
  rejectionReason?: string;
  createdAt: string;
  updatedAt: string;
}

// Payment Information
export interface PaymentInfo {
  amount: number;
  status: PaymentStatus;
  method?: "card" | "bank_transfer" | "cash" | "mobile_money";
  transactionRef?: string;
  paidAt?: string;
  receiptUrl?: string;
}

// Verification Types
export interface CertificateVerification {
  certificateNumber: string;
  certificateType: CertificateType;
  isValid: boolean;
  issueDate?: string;
  holderName?: string;
  verificationDate: string;
  verificationCode?: string;
}

// Admin Dashboard Types
export interface AdminStats {
  totalApplications: {
    birth: number;
    death: number;
    total: number;
  };
  pending: number;
  approved: number;
  rejected: number;
  revenueThisMonth: number;
  revenueTotal: number;
  averageProcessingTime: number; // in days
}

export interface ApplicationFilters {
  type?: CertificateType;
  status?: ApplicationStatus;
  dateFrom?: string;
  dateTo?: string;
  searchQuery?: string;
}

// Constants
export const CERTIFICATE_FEES = {
  birth: {
    standard: 2500, // Standard processing (14 days)
    express: 5000, // Express processing (3 days)
    urgent: 10000, // Urgent processing (24 hours)
  },
  death: {
    standard: 3000,
    express: 6000,
    urgent: 12000,
  },
};

export const PROCESSING_TIMES = {
  standard: 14,
  express: 3,
  urgent: 1,
};

export const REQUIRED_DOCUMENTS = {
  birth: [
    "Hospital Birth Record",
    "Parents Marriage Certificate (if applicable)",
    "Valid ID of both parents",
    "Passport photographs of child",
  ],
  death: [
    "Medical Certificate of Death",
    "Valid ID of deceased",
    "Valid ID of informant",
    "Burial permit (if applicable)",
  ],
};

// Helper Types
export type CertificateApplication =
  | BirthCertificateApplication
  | DeathCertificateApplication;

// Form Step Types
export interface FormStep {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}
