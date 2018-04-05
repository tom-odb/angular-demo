import { Pipe, PipeTransform } from "@angular/core";
import { DatePipe } from "@angular/common";

@Pipe({
  name: "customDate"
})
export class CustomDatePipe implements PipeTransform {
  constructor (
    private datePipe: DatePipe
  ){

  }
  transform(value: string): string {
    if(!value) {
      return "";
    }

    return this.datePipe.transform(value, "d MMMM yyyy, HH:mm")
  }
}
