import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dup'
})
export class DupPipe implements PipeTransform {

  transform(value: string): string {
    return value + 'ZZZZZ';
  }

}
