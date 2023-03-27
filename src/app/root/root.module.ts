import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Moduels
import { AnimeModule } from '../anime/anime.module';
import { SharedModule } from '../shared/shared.module';
import { RootRoutingModule } from './root-routing.module';

// Components
import { RootPageComponent } from './pages/root-page/root-page.component';
import { SlidesPageComponent } from './pages/slides-page/slides-page.component';
import { SearchInputComponent } from './components/search-input/search-input.component';

@NgModule({
  declarations: [RootPageComponent, SlidesPageComponent, SearchInputComponent],
  imports: [
    CommonModule,
    RootRoutingModule,
    AnimeModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class RootModule {}
