import { Component } from '@angular/core';

@Component({
  selector: 'app-go-up',
  templateUrl: './go-up.component.html',
  styles: [],
})
export class GoUpComponent {
  public goUp(): void {
    scrollTo({ top: 0, behavior: 'smooth' });
  }
}
