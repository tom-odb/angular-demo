import { Reducer } from "redux";

import { Upload, UploadAction } from "./upload.types";
import { UPLOAD_LOAD } from "./upload.actiontypes";

export const uploadReducer: Reducer<Upload> = (
  state: Upload = null,
  action: UploadAction
): Upload => {
  if (action.type === UPLOAD_LOAD) {
    return {
      ...action.upload,
    };
  }

  return state;
};
