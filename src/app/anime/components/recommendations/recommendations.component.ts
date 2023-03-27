import { Component, Input } from '@angular/core';
import { Recommendation } from '../../../jikan/interfaces/jikan.interface';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styles: [],
})
export class RecommendationsComponent {
  @Input()
  public recommendations?: Recommendation[];
}
