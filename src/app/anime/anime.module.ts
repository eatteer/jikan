import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideCardComponent } from './components/slide-card/slide-card.component';
import { SlidesComponent } from './components/slides/slides.component';
import { TrailerComponent } from './components/trailer/trailer.component';
import { SearchResultsPageComponent } from '../root/pages/search-results-page/search-results-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { AnimeRoutingModule } from './anime-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FallbackEmbedUrlPipe } from './pipes/fallback-embed-url.pipe';
import { FallbackImgUrlPipe } from './pipes/fallback-img-url.pipe';

@NgModule({
  declarations: [
    SlideCardComponent,
    SlidesComponent,
    TrailerComponent,
    SearchResultsPageComponent,
    DetailPageComponent,
    FallbackEmbedUrlPipe,
    FallbackImgUrlPipe,
  ],
  imports: [CommonModule, AnimeRoutingModule, SharedModule],
  exports: [
    SlideCardComponent,
    SlidesComponent,
    TrailerComponent,
    FallbackEmbedUrlPipe,
  ],
})
export class AnimeModule {}
