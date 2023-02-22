import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootPageComponent } from './root/pages/root-page/root-page.component';

const routes: Routes = [
  {
    path: '',
    component: RootPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
