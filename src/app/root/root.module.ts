import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RootPageComponent } from './pages/root-page/root-page.component';
import { AnimeModule } from '../anime/anime.module';
import { RootRoutingModule } from './root-routing.module';
import { SlidesPageComponent } from './pages/slides-page/slides-page.component';
import { SearchInputComponent } from './components/search-input/search-input.component';

@NgModule({
  declarations: [RootPageComponent, SlidesPageComponent, SearchInputComponent],
  imports: [CommonModule, RootRoutingModule, AnimeModule, ReactiveFormsModule],
})
export class RootModule {}
