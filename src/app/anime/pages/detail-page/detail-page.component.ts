import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime, Review } from 'src/app/jikan/interfaces/jikan.interface';
import { JikanService } from '../../../jikan/services/jikan.service';
import { Recommendation } from '../../../jikan/interfaces/jikan.interface';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styles: [],
})
export class DetailPageComponent implements OnInit {
  public anime?: Anime;
  public reviews?: Review[];
  public recommendations?: Recommendation[];

  public constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private jikanService: JikanService
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      // Reset anime so that user does not see the previous one
      // while the new one is loading.
      this.anime = undefined;

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

      // Scroll to top to see the new anime
      scrollTo({ top: 0 });
    });
  }
}
