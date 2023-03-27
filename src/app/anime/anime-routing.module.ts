import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { DetailPageComponent } from './pages/detail-page/detail-page.component';

const routes: Routes = [
  { path: '', children: [{ path: ':id', component: DetailPageComponent }] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimeRoutingModule {}
