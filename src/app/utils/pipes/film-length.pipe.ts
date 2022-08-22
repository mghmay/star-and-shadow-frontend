import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filmLength',
})
export class FilmLengthPipe implements PipeTransform {
  transform(value: number): string {
    let hours = Math.floor(value / 60);
    let minutes = Math.floor(value % 60);
    return hours > 1
      ? hours + ' hrs ' + minutes + ' mins'
      : hours
      ? hours + ' hr ' + minutes + ' mins'
      : minutes + ' mins';
  }
}
