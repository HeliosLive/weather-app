import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampDateFormat',
})
export class TimestampDateFormatPipe implements PipeTransform {
  transform(value: number | undefined) {
    if (value && !isNaN(value)) {
      const hours = new Date(value * 1000).getHours();
      const minutes = new Date(value * 1000).getMinutes();
      return hours.toString().length > 1
        ? minutes.toString().length > 1
          ? `${hours}:${minutes}`
          : `${hours}:0${minutes}`
        : minutes.toString().length > 1
        ? `0${hours}:${minutes}`
        : `0${hours}:0${minutes}`;
    }
    return;
  }
}
