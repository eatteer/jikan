import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fallbackImgUrl',
})
export class FallbackImgUrlPipe implements PipeTransform {
  transform(url?: string): string {
    const fallback =
      'https://www.theatrecr.org/wp-content/uploads/2016/01/poster-placeholder.png';
    return url ?? fallback;
  }
}
