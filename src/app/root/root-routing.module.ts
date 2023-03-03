import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RootPageComponent } from './pages/root-page/root-page.component';
import { SlidesPageComponent } from './pages/slides-page/slides-page.component';

const routes: Routes = [
  {
    path: '',
    component: RootPageComponent,
    children: [
      { path: ':filter', component: SlidesPageComponent },
      { path: '**', redirectTo: 'airing' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RootRoutingModule {}
