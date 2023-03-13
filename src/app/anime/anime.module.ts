import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideCardComponent } from './components/slide-card/slide-card.component';
import { SlidesComponent } from './components/slides/slides.component';
import { TrailerComponent } from './components/trailer/trailer.component';
import { SearchResultsPageComponent } from '../root/pages/search-results-page/search-results-page.component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { AnimeRoutingModule } from './anime-routing.module';

@NgModule({
  declarations: [
    SlideCardComponent,
    SlidesComponent,
    TrailerComponent,
    SearchResultsPageComponent,
    DetailPageComponent,
  ],
  imports: [CommonModule, AnimeRoutingModule],
  exports: [SlideCardComponent, SlidesComponent, TrailerComponent],
})
export class AnimeModule {}
