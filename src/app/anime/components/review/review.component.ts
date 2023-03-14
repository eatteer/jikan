import { Component, Input } from '@angular/core';
import { Review } from 'src/app/jikan/interfaces/jikan.interface';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styles: [],
})
export class ReviewComponent {
  @Input()
  public review!: Review;
}
