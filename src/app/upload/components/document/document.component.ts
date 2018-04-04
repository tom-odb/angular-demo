import { Component, Input } from '@angular/core';
import { select } from "@angular-redux/store";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Component({
    selector: "app-document",
    templateUrl: "./document.component.html",
  })
export class DocumentComponent {
    @Input() public document;

    public destinationClicked(destination) {
        console.log(destination);
    }
}