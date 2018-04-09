import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { select } from "@angular-redux/store";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: "app-form-option",
    templateUrl: "./form-option.component.html",
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => FormOptionComponent),
        multi: true,
      }
    ]
  })
export class FormOptionComponent implements ControlValueAccessor {
    @Input() public formoption;
    public data;

    handleInput() {
      this.changeData(this.data);
    }

    changeData = (_: any) => {};

    writeValue(value: any) {
      if(value !== undefined) {
        this.data = value;
      }
    }

    registerOnChange(fn) {
      this.changeData = fn;
    }

    registerOnTouched() {}
}
