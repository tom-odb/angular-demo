import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { select } from "@angular-redux/store";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Upload } from '../../store';
import { DocumentInformations } from "../information/information.types"
import { path } from "ramda";
import { DOCUMENT_META_LABELS, DOCUMENT_INFORMATION_LABELS } from '../../upload.conf';

@Component({
    selector: "app-document",
    templateUrl: "./document.component.html",
  })
export class DocumentComponent implements OnInit, OnChanges{
    @Input() public document: Upload;
    public information: DocumentInformations = [];
    public meta: DocumentInformations = [];


    public ngOnInit() {
      this.information = this.getInformation();
      this.meta = this.getMeta();
    }

    public ngOnChanges(changes: SimpleChanges){
      if(changes.hasOwnProperty("document") && !!changes.document.currentValue) {
        this.information = this.getInformation(changes.document.currentValue);
        this.meta = this.getMeta(changes.document.currentValue);
      }
    }

    public destinationClicked(destination) {
        console.log(destination);
    }

    private getInformation(document: Upload = this.document): DocumentInformations {
      return this.getProps(document, DOCUMENT_INFORMATION_LABELS);
    }

    private getMeta(document: Upload = this.document): DocumentInformations {
      return this.getProps(document, DOCUMENT_META_LABELS);
    }

    private getProps(doc: Upload, labels: any){
      return Object.keys(labels).reduce((result, current) => {
        const label = labels[current];
        const value = label.path ? path(label.path, doc) : doc[current];
        if(value === undefined) {
          return result;
        }
        return [
          ...result,
          {
            key: current,
            label: label.label,
            type: label.type,
            value,
          }
        ]
      }, []);
    }
}

