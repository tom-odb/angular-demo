import { Injectable } from "@angular/core";
import { NgRedux } from "@angular-redux/store";

import { UploadState } from "../store.types";

import { UPLOAD_LOAD } from "./upload.actiontypes";
import { UploadService } from "./upload.service";
import { Upload } from "./upload.types";

@Injectable()
export class UploadActioncreator {
  constructor(
    private ngRedux: NgRedux<UploadState>,
    private uploadService: UploadService
  ) {}

  public fetchUpload(id: string): Promise<void> {
    return this.uploadService.fetchUpload(id)
      .then((upload: Upload) => this.loadUpload(upload));
  }

  public loadUpload(upload: Upload): void {
    this.ngRedux.dispatch({
      type: UPLOAD_LOAD,
      upload,
    });
  }
}
