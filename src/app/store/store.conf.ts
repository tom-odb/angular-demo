import { combineReducers } from "redux";

import { uploadReducers, UPLOAD_INITIAL_STATE } from "../upload/store";

import { AppState } from "./store.types";

export const rootReducer = combineReducers<AppState>({
  ...uploadReducers,
});

export const STORE_INITIAL_STATE: AppState = {
  ...UPLOAD_INITIAL_STATE,
};
