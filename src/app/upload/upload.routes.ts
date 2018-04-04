import { Routes } from "@angular/router";

import { UploadPageComponent } from "./pages/upload/upload.page";

export const UPLOAD_ROUTES: Routes = [{
	path: "upload/:id",
	component: UploadPageComponent,
	pathMatch: "full",
}];
