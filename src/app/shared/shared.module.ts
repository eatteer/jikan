import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Pipes
import { SafeUrlPipe } from './pipes/safe-url.pipe';

// Directives
import { HorizontalScrollDirective } from './directives/horizontal-scroll.directive';

// Components
import { AppbarComponent } from './components/appbar/appbar.component';
import { CollapsibleComponent } from './components/collapsible/collapsible.component';
import { FullBleedSliderComponent } from './components/full-bleed-slider/full-bleed-slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { GoUpComponent } from './components/go-up/go-up.component';

@NgModule({
  declarations: [
    SafeUrlPipe,
    HorizontalScrollDirective,
    AppbarComponent,
    CollapsibleComponent,
    FullBleedSliderComponent,
    FooterComponent,
    GoUpComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    SafeUrlPipe,
    HorizontalScrollDirective,
    AppbarComponent,
    CollapsibleComponent,
    FullBleedSliderComponent,
    FooterComponent,
    GoUpComponent,
  ],
})
export class SharedModule {}
