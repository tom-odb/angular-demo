import { Action } from "redux";

export interface UploadDestination {
  uniqueIdentifier: string;
  id: string;
  firstName: string;
  lastName: string;
}

export interface Upload {
  id: string;
  externalName: string;
  uploadDate: Date;
  referenceDate: Date;
  organization: {
    id: string;
    name: string;
  };
  organizationUnit: {
    id: string;
    name: string;
  };
  documentType: {
    id: string;
    name: string;
  };
  destinations: UploadDestination[];
  destinationCounts: {
    total: number;
    committed: number;
    deleted: number;
    locked: number;
  };
  fileUploadState: string;
  _actions: string[][];
}

export interface UploadAction extends Action {
  upload: Upload;
}
