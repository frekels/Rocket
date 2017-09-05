import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendSponsor'
})
export class AppendSponsorPipe implements PipeTransform {

  transform(items: any): any {
    return 'http://ecms-award.aut.ac.nz/web/sponsorCarousel/' + items;
  }

}