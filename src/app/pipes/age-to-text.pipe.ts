import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ageToText'
})
export class AgeToTextPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value +'years';
  }

}
