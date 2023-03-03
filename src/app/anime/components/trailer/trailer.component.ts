import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styles: [],
})
export class TrailerComponent {
  @ViewChild('container')
  public containerRef!: ElementRef<HTMLDivElement>;

  @ViewChild('trailer')
  public trailer!: ElementRef<HTMLIFrameElement>;

  // If has not been the first time the trailer is visible
  // then do not show the component
  public firstTime: boolean = false;
  public title: string = '';

  public appendTo(element: Element): void {
    // If has not been the first time
    // then this is the first time :v
    // So set the var to true forever
    // This allows the component not beign shown
    // the first time but all other times yes
    if (!this.firstTime) this.firstTime = true;
    element.append(this.containerRef.nativeElement);
  }

  public removeFrom(element: Element): void {
    element.removeChild(this.containerRef.nativeElement);
  }
}
