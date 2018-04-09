export const DOCUMENT_INFORMATION_LABELS = {
  organization: {
    label: "Afdeling",
    path: ["organization", "name"],
    required: "true",
  },
  documentType: {
    label: "Document Type",
    path: ["documentType", "name"],
    required: "true",
  },
  referenceDate: {
    label: "Referentiedatum",
    required: "true",
    type: "date",
  },
  uploadDate: {
    label: "Uploaddatum",
    required: "true",
    type: "date",
  },
  fileUploadState: {
    label: "Status",
    required: "true",
  },
}

export const DOCUMENT_DESTINATION_LABELS = {
  destination: {
    label: "Bestemmeling",
    required: "true",
  },
}

export const DOCUMENT_META_LABELS = {
  personnelNumber: {
    label: "Personeelsnummer",
    path: ["metaData", "personnelNumber"],
    required: "true",
  },
  brutoWage: {
    label: "Bruttoloon",
    type: "valuta",
    path: ["metaData", "wage", "bruto"],
    required: "true",
  },
  nettoWage: {
    label: "Nettoloon",
    type: "valuta",
    path: ["metaData", "wage", "netto"],
    required: "true",
  }
}
