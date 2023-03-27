import { Component, Input } from '@angular/core';
import { Anime } from 'src/app/jikan/interfaces/jikan.interface';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './detail.component.html',
  styles: [],
})
export class DetailComponent {
  @Input()
  public anime?: Anime;
}
