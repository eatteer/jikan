import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fallbackEmbedUrl',
})
export class FallbackEmbedUrlPipe implements PipeTransform {
  public transform(url?: string): string {
    const fallback =
      'https://www.youtube.com/embed/bfv-VaaAlxc?enablejsapi=1&wmode=opaque&autoplay=1';
    return url ?? fallback;
  }
}
