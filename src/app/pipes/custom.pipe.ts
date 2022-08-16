import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: number, currencyType: string, location: string = 'fr' || 'be', digitsNumber: number): string  {
    if (location == 'fr') {
      value = value / 1000;
      return currencyType + value.toFixed(digitsNumber);
    } else {
      return value.toFixed(digitsNumber) + currencyType
    }
  }

}
