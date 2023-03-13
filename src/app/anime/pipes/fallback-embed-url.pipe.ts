import { Pipe, PipeTransform } from '@angular/core';
import { AnimeService } from '../services/anime.service';

@Pipe({
  name: 'fallbackEmbedUrl',
})
export class FallbackEmbedUrlPipe implements PipeTransform {
  public constructor(private animeService: AnimeService) {}

  public transform(url?: string): string {
    const fallback = this.animeService.fallbackUrls.embed;
    return url ?? fallback;
  }
}
