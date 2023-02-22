import { Component, Input } from '@angular/core';
import { Anime } from '../../../jikan/interfaces/top-anime-response.interface';

@Component({
  selector: 'app-slide-card',
  templateUrl: './slide-card.component.html',
  styleUrls: ['./slide-card.component.html']
})
export class SlideCardComponent {
  @Input()
  public anime!: Anime;
}
