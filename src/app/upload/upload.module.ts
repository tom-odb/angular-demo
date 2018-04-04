import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { NgReduxModule } from "@angular-redux/store";

import { UploadService } from "./store/upload/upload.service";
import { UploadActioncreator } from "./store/upload/upload.actioncreator";

import { Components } from "./components";
import { Pages } from "./pages";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgReduxModule,
    HttpClientModule
  ],
  providers: [
    UploadActioncreator,
    UploadService,
  ],
  declarations: [
    ...Components,
    ...Pages,
  ],
})
export class UploadModule {}
