import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { AppbarComponent } from './components/appbar/appbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SafeUrlPipe, AppbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [SafeUrlPipe, AppbarComponent],
})
export class SharedModule {}
