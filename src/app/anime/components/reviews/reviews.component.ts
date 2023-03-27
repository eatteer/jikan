import { Component, Input } from '@angular/core';
import { Review } from 'src/app/jikan/interfaces/jikan.interface';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styles: [],
})
export class ReviewsComponent {
  @Input()
  public reviews?: Review[];
}
