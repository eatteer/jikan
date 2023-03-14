import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime, Review } from 'src/app/jikan/interfaces/jikan.interface';
import { JikanService } from '../../../jikan/services/jikan.service';
import { Recommendation } from '../../../jikan/interfaces/jikan.interface';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styles: [],
})
export class DetailPageComponent {
  public anime?: Anime;
  public reviews: Review[] = [];
  public recommendations: Recommendation[] = [];

  public constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private jikanService: JikanService
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      if (!params.has('id')) {
        this.router.navigate(['/']);
        return;
      }
      const id = params.get('id')!;

      // Fetch details
      this.jikanService.getById(id).subscribe((detailAnimeResponse) => {
        this.anime = detailAnimeResponse.data;
      });

      // Fetch reviews
      this.jikanService
        .getAnimeReviews(id)
        .subscribe((reviewsAnimeResponse) => {
          this.reviews = reviewsAnimeResponse.data;
        });

      // Fetch recommendations
      this.jikanService
        .getAnimeRecommendations(id)
        .subscribe((recommendationAnimeResponse) => {
          this.recommendations = recommendationAnimeResponse.data;
        });
    });
  }
}
