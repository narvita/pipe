import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: number, currencyType: string, currencyLocation: string = 'fr' || 'be', digitsNumber: number): string  {
    if (currencyLocation == 'fr') {
      value = value / 1000;
      return currencyType + value.toFixed(digitsNumber);
    } else {
      return value.toFixed(digitsNumber) + currencyType;
    }
  }

}
