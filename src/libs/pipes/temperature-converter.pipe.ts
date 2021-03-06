import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConverter',
})
export class TemperatureConverterPipe implements PipeTransform {
  transform(value: number | undefined, unit: string) {
    if (value && !isNaN(value)) {
      // Ternary.. very simple and understandable
      // but sometimes people dont like it inside of pipe
      // return unit === 'C'
      //   ? Math.round(value - 273.15)
      //   : unit === 'K'
      //   ? Math.round(value + 273.15)
      //   : value;
      if (unit === 'C') {
        const tempareature = Math.round(value - 273.15);
        return tempareature;
      }
      if (unit === 'K') {
        const tempareature = Math.round(value + 273.15);
        return tempareature.toFixed(2);
      }
    }
    return;
  }
}
