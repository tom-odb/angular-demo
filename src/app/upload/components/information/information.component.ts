import { Component, Input, Output, EventEmitter } from '@angular/core';
import { select } from "@angular-redux/store";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { DocumentInformation } from './information.types';

@Component({
    selector: "app-information",
    templateUrl: "./information.component.html",
  })
export class InformationComponent {
    @Input() public information: DocumentInformation;

    // Meer minder
}
