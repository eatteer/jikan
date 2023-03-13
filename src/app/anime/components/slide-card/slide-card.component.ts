import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Anime } from '../../../jikan/interfaces/top-anime-response.interface';
import { TrailerComponent } from '../trailer/trailer.component';

@Component({
  selector: 'app-slide-card',
  templateUrl: './slide-card.component.html',
  styles: [],
})
export class SlideCardComponent {
  @Input()
  public anime!: Anime;

  @ViewChild('container')
  public containerRef!: ElementRef<HTMLImageElement>;

  @ViewChild('poster')
  public posterRef!: ElementRef<HTMLImageElement>;

  public constructor(
    private domSanitizer: DomSanitizer,
    public trailer: TrailerComponent
  ) {}

  public mouseEnterPoster(container: Element): void {
    return;
    this.trailer.title = this.anime.title || 'Unknown';
    this.trailer.appendTo(container);
    // PLAY VIDEO
    const url = this.anime.trailer?.embed_url;
    this.trailer.trailer.nativeElement.src = url ? url + '&controls=0' : '';
  }

  public mouseMovePoster(event: MouseEvent): void {
    return;
    const poster = this.posterRef.nativeElement;
    const trailer = this.trailer.containerRef.nativeElement;
    const posterRect = poster.getBoundingClientRect();

    const viewportDimensions = {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    };

    const offset = 40;

    // Position trailer relative to container
    const top = event.clientY - offset - posterRect.top;
    const left = event.clientX - offset - posterRect.left;
    trailer.style.top = `${top}px`;
    trailer.style.left = `${left}px`;

    // Calculate if some trailer fragment is outside screen
    const trailerRect = trailer.getBoundingClientRect();
    if (trailerRect.right > viewportDimensions.width) {
      trailer.style.left = '';
      trailer.style.right = `${posterRect.right - offset - event.clientX}px`;
    }
  }

  public mouseLeavePoster(container: Element): void {
    return;
    this.trailer.removeFrom(container);
  }

  public getUrl(url?: string | null): SafeUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url || '');
  }
}
