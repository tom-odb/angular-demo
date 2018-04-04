import { uploadReducer } from "./upload/upload.reducer";

export const uploadReducers = {
  upload: uploadReducer,
};

export const UPLOAD_INITIAL_STATE = {
  upload: null,
};

export { UploadActioncreator } from "./upload/upload.actioncreator";
export { Upload } from "./upload/upload.types";
export { UploadState } from "./store.types";
