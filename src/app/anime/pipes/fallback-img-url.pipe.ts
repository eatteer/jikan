import { Pipe, PipeTransform } from '@angular/core';
import { AnimeService } from '../services/anime.service';

@Pipe({
  name: 'fallbackImgUrl',
})
export class FallbackImgUrlPipe implements PipeTransform {
  public constructor(private animeService: AnimeService) {}

  public transform(url?: string): string {
    const fallback = this.animeService.fallbackUrls.img;
    return url ?? fallback;
  }
}
