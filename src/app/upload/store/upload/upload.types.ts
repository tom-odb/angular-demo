import { Action } from "redux";

export interface UploadMeta {
  personnelNumber: string;
  wage: {
    bruto: number;
    netto: number;
  };
}

export interface UploadDestination {
  uniqueIdentifier: string;
  id: string;
  firstName: string;
  lastName: string;
}

export interface Upload {
  id: string;
  externalName: string;
  uploadDate: string;
  referenceDate: string;
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
  metaData: UploadMeta;
}

export interface UploadAction extends Action {
  upload: Upload;
}
