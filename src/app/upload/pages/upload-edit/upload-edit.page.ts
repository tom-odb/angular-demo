import { Component, OnInit, OnDestroy } from "@angular/core";
import { select } from "@angular-redux/store";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";

import { Upload, UploadActioncreator } from "../../store";

@Component({
  selector: "upload-edit-page",
  templateUrl: "./upload-edit.page.html",
})
export class UploadEditPageComponent implements OnInit {
  @select("upload") public upload$: Observable<Upload>;
  public loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private uploadActions: UploadActioncreator
  ) {}

  public ngOnInit(): void {
    this.uploadActions.fetchUpload(this.route.snapshot.params.id)
      .then(
        () => this.loading = false,
        () => this.loading = false
      );
  }
}
