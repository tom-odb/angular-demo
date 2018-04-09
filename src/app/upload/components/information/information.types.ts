export interface DocumentInformation {
  key: string;
  value: string;
  label: string;
  type?: "date" | "valuta";
}

export type DocumentInformations = DocumentInformation[];
