import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './pipes/safe-url.pipe';
import { AppbarComponent } from './components/appbar/appbar.component';
import { RouterModule } from '@angular/router';
import { CollapsibleComponent } from './components/collapsible/collapsible.component';

@NgModule({
  declarations: [SafeUrlPipe, AppbarComponent, CollapsibleComponent],
  imports: [CommonModule, RouterModule],
  exports: [SafeUrlPipe, AppbarComponent, CollapsibleComponent],
})
export class SharedModule {}
