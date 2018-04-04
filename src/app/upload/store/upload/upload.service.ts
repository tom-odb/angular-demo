import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import "rxjs/add/operator/toPromise";

import { Upload } from "./upload.types";

@Injectable()
export class UploadService {
  private baseURL: string = "/uploads"

  constructor(
    private httpClient: HttpClient
  ) {}

  public fetchUpload(id: string): Promise<Upload> {
    return this.httpClient
      .get<Upload>(`${this.baseURL}/${id}`)
      .toPromise();
  }
}
