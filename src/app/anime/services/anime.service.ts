import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimeService {
  public fallbackUrls = {
    embed: 'https://www.youtube.com/embed/bfv-VaaAlxc?enablejsapi=1&wmode=opaque&autoplay=1',
    img: 'https://www.theatrecr.org/wp-content/uploads/2016/01/poster-placeholder.png',
  };
}
