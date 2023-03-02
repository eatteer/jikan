import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootPageComponent } from './pages/root-page/root-page.component';
import { SlidesComponent } from './components/slides/slides.component';
import { SlideCardComponent } from './components/slide-card/slide-card.component';
import { TrailerComponent } from './components/trailer/trailer.component';

@NgModule({
  declarations: [
    RootPageComponent,
    SlidesComponent,
    SlideCardComponent,
    TrailerComponent,
  ],
  imports: [CommonModule],
})
export class RootModule {}
