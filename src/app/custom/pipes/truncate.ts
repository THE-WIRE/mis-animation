import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, args: string[]) : string {
    let limit = args.length > 0 ? parseInt(args[1], 10) : 50;
    let trail = args.length > 1 ? args[2] : '...';

    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
