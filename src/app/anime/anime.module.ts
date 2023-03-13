import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideCardComponent } from './components/slide-card/slide-card.component';
import { SlidesComponent } from './components/slides/slides.component';
import { TrailerComponent } from './components/trailer/trailer.component';
import { SearchResultsPageComponent } from '../root/pages/search-results-page/search-results-page.component';

@NgModule({
  declarations: [
    SlideCardComponent,
    SlidesComponent,
    TrailerComponent,
    SearchResultsPageComponent,
  ],
  imports: [CommonModule],
  exports: [SlideCardComponent, SlidesComponent, TrailerComponent],
})
export class AnimeModule {}
