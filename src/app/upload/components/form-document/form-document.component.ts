import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { select } from "@angular-redux/store";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Upload } from '../../store';
import { DocumentInformations } from "../information/information.types";
import { DOCUMENT_INFORMATION_LABELS, DOCUMENT_DESTINATION_LABELS, DOCUMENT_META_LABELS } from "../../upload.conf";
import { pathOr } from "ramda";

@Component({
    selector: "app-form-document",
    templateUrl: "./form-document.component.html",
  })
export class FormDocumentComponent implements OnChanges {
  @Input() public document: Upload;

  public loading = true;
  public formlabelsalgemeen: any;
  public formlabelsbestemmelingen: any;
  public formlabelsmetadata: any;

  public ngOnChanges(changes: SimpleChanges) {
    if (!changes.document || !changes.document.currentValue) {
      return;
    }

    this.formlabelsalgemeen = this.getLabels(DOCUMENT_INFORMATION_LABELS);
    this.formlabelsbestemmelingen = this.getLabels(DOCUMENT_DESTINATION_LABELS);
    this.formlabelsmetadata = this.getLabels(DOCUMENT_META_LABELS);

    this.loading = false;
  }

  private getLabels(labels: any){
    return Object.keys(labels).reduce((result, current) => {
      const label = labels[current];
      return [
        ...result,
        {
          key: current,
          label: label.label,
          type: label.type,
          required: label.required,
          value: pathOr("", label.path || [current], this.document),
        }
      ]
    }, []);
  }


}

