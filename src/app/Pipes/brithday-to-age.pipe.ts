import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'brithdayToAge'
})
export class BrithdayToAgePipe implements PipeTransform {

  transform(value: Date): string {
    let today = moment();
    let birthdate = moment(value);
    let years = today.diff(birthdate, 'years');
    let html: string = years + " سنة ";
    return html;
  }

}
