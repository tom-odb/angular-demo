import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UPLOAD_ROUTES } from "./upload/upload.routes"

export const ROUTES: Routes = [
  ...UPLOAD_ROUTES,
  { path: "**", redirectTo: "/upload/123", pathMatch: "full" },
];

@NgModule({
	imports: [
		RouterModule.forRoot(ROUTES),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
