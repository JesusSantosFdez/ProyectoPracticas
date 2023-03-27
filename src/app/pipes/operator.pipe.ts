import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'operator'
})
export class OperatorPipe implements PipeTransform {

  transform(operator: string): string {
    switch(operator){
      case 'mult':
        return '×';
      case 'div':
        return '÷';
      case 'min':
        return '-';
      case 'add':
        return '+';
      case 'elev':
        return '^';
    }

    return '';
  }

}
