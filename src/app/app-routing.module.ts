import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'anime',
    loadChildren: () =>
      import('./anime/anime.module').then((m) => m.AnimeModule),
  },
  {
    path: '',
    loadChildren: () => import('./root/root.module').then((m) => m.RootModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
