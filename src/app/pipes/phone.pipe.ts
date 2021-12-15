import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(input: number) {
    return '0' + input.toString().slice(0, 2) + '-' + input.toString().slice(2, input.toString().length);
  }

}
