import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHorizontalScroll]',
})
export class HorizontalScrollDirective {
  public constructor(private elementRef: ElementRef<HTMLElement>) {}

  /**
   * @param {WheelEvent} event
   */
  @HostListener('wheel', ['$event'])
  public scrollHorizontally(event: any): void {
    event.preventDefault();
    const element = this.elementRef.nativeElement;
    element.scrollLeft += event.deltaY;
  }
}
