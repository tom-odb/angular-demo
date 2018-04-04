import { UploadState } from "../upload/store";

export interface RootState {}

export type AppState =  RootState &
                        UploadState;
