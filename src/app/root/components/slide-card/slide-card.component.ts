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
    this.trailer.title = this.anime.title || 'Unknown';
    this.trailer.appendTo(container);
    // PLAY VIDEO
    const url = this.anime.trailer?.embed_url;
    this.trailer.trailer.nativeElement.src = url ? url + '&controls=0' : '';
  }

  public mouseMovePoster(event: MouseEvent): void {
    const poster = this.posterRef.nativeElement;
    const trailer = this.trailer.containerRef.nativeElement;
    const rect = poster.getBoundingClientRect();

    trailer.style.left = `${event.clientX - 40 - rect.left}px`;
    trailer.style.top = `${event.clientY - 40 - rect.top}px`;
  }

  public mouseLeavePoster(container: Element): void {
    this.trailer.removeFrom(container);
  }

  public getUrl(url?: string | null): SafeUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url || '');
  }
}
