import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootPageComponent } from './pages/root-page/root-page.component';
import { SlidesPageComponent } from './pages/slides-page/slides-page.component';
import { SearchResultsPageComponent } from './pages/search-results-page/search-results-page.component';

const routes: Routes = [
  {
    path: '',
    component: RootPageComponent,
    children: [
      { path: 'filter/:filter', component: SlidesPageComponent },
      {
        path: 'search',
        component: SearchResultsPageComponent,
      },
      { path: '**', redirectTo: 'filter/airing' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
