import { NgModule } from "@angular/core";
import { CommonModule, DatePipe, CurrencyPipe } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { NgReduxModule } from "@angular-redux/store";

import { UploadService } from "./store/upload/upload.service";
import { UploadActioncreator } from "./store/upload/upload.actioncreator";

import { Components } from "./components";
import { Pages } from "./pages";
import { Pipes } from "./pipes";

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
    DatePipe,
    CurrencyPipe,
  ],
  declarations: [
    ...Components,
    ...Pages,
    ...Pipes,
  ],
})
export class UploadModule {}
