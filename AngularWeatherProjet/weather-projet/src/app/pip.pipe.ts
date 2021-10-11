import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pip'
})
export class PipPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
