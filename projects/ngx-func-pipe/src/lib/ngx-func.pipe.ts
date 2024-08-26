import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ngxFunc',
  pure: true,
  standalone: true,
})
export class NgxFuncPipe implements PipeTransform {
  transform<T extends unknown[], R>(func: (...args: T) => R, ...args: T): R {
    return func(...args);
  }
}
