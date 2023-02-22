import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootPageComponent } from './pages/root-page/root-page.component';
import { SlidesComponent } from './components/slides/slides.component';
import { SlideCardComponent } from './components/slide-card/slide-card.component';

@NgModule({
  declarations: [RootPageComponent, SlidesComponent, SlideCardComponent],
  imports: [CommonModule],
})
export class RootModule {}
