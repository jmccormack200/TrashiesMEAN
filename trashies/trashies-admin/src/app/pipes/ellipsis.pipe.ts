import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(val, args) {
    console.log("!!!!");
    console.log(args);
    if (args === undefined) {
      return val;
    }

    if (val.length > args) {
      return val.substring(0, args) + '...';
    } else {
      return val;
    }
  }
}
