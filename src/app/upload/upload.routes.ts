import { Routes } from "@angular/router";

import { UploadPageComponent } from "./pages/upload/upload.page";
import { UploadEditPageComponent } from "./pages/upload-edit/upload-edit.page";

export const UPLOAD_ROUTES: Routes = [{
	path: "upload/:id",
	component: UploadPageComponent,
},
{
  path: "upload/:id/bewerken",
	component: UploadEditPageComponent,
}];
