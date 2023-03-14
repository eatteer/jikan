import { Component, Input } from '@angular/core';
import { Anime } from 'src/app/jikan/interfaces/jikan.interface';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styles: [],
})
export class AnimeDetailComponent {
  @Input()
  public anime!: Anime;
}
