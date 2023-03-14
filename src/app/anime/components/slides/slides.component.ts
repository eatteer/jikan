import { Component, Input } from '@angular/core';
import { Anime } from 'src/app/jikan/interfaces/jikan.interface';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css'],
})
export class SlidesComponent {
  @Input()
  public animesChunks: Array<Anime[]> = [];

  public slideTrackClasses(slideIndex: number) {
    return {
      'slide-track': true,
      'animation-slide-left': slideIndex % 2 === 0,
      'animation-slide-right': slideIndex % 2 !== 0,
    };
  }
}
