import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideCardComponent } from './components/slide-card/slide-card.component';
import { SlidesComponent } from './components/slides/slides.component';
import { TrailerComponent } from './components/trailer/trailer.component';

@NgModule({
  declarations: [SlideCardComponent, SlidesComponent, TrailerComponent],
  imports: [CommonModule],
  exports: [SlideCardComponent, SlidesComponent, TrailerComponent],
})
export class AnimeModule {}
