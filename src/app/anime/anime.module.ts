import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { AnimeRoutingModule } from './anime-routing.module';
import { SharedModule } from '../shared/shared.module';

// Pipes
import { FallbackEmbedUrlPipe } from './pipes/fallback-embed-url.pipe';
import { FallbackImgUrlPipe } from './pipes/fallback-img-url.pipe';

// Components
import { DetailComponent } from './components/detail/detail.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { RecommendationComponent } from './components/recommendation/recommendation.component';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { ReviewComponent } from './components/review/review.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { SearchResultsPageComponent } from '../root/pages/search-results-page/search-results-page.component';
import { SlideCardComponent } from './components/slide-card/slide-card.component';
import { SlidesComponent } from './components/slides/slides.component';
import { TrailerComponent } from './components/trailer/trailer.component';

@NgModule({
  declarations: [
    FallbackEmbedUrlPipe,
    FallbackImgUrlPipe,
    DetailComponent,
    DetailPageComponent,
    RecommendationComponent,
    RecommendationsComponent,
    ReviewComponent,
    ReviewsComponent,
    SearchResultsPageComponent,
    SlideCardComponent,
    SlidesComponent,
    TrailerComponent,
  ],
  imports: [CommonModule, AnimeRoutingModule, SharedModule],
  exports: [
    FallbackEmbedUrlPipe,
    SlideCardComponent,
    SlidesComponent,
    TrailerComponent,
  ],
})
export class AnimeModule {}
