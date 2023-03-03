import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootPageComponent } from './pages/root-page/root-page.component';
import { AnimeModule } from '../anime/anime.module';
import { RootRoutingModule } from './root-routing.module';
import { SlidesPageComponent } from './pages/slides-page/slides-page.component';

@NgModule({
  declarations: [RootPageComponent, SlidesPageComponent],
  imports: [CommonModule, RootRoutingModule, AnimeModule],
})
export class RootModule {}
