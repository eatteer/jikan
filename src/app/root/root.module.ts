import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootPageComponent } from './pages/root-page/root-page.component';
import { AnimeModule } from '../anime/anime.module';

@NgModule({
  declarations: [RootPageComponent],
  imports: [CommonModule, AnimeModule],
})
export class RootModule {}
