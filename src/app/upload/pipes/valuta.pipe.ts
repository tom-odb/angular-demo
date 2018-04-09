import { Pipe, PipeTransform } from "@angular/core";
import { CurrencyPipe } from "@angular/common";

@Pipe({
  name: "customValuta"
})
export class CustomCurrencyPipe implements PipeTransform {
  constructor (
    private currencyPipe: CurrencyPipe
  ){

  }
  transform(value: string): string {
    if(!value) {
      return "";
    }

    return this.currencyPipe.transform(value, "EUR")
  }
}
