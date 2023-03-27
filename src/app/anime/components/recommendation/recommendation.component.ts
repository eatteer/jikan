import { Component, Input } from '@angular/core';
import { Recommendation } from '../../../jikan/interfaces/jikan.interface';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css'],
})
export class RecommendationComponent {
  @Input()
  public recommendation?: Recommendation;
}
