import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styles: [],
})
export class CollapsibleComponent {
  public isOpen = false;

  @ContentChild('content')
  public content!: ElementRef<HTMLElement>;

  public toggle(): void {
    this.content.nativeElement.classList.toggle('max-h-full');
    this.isOpen = !this.isOpen;
  }
}
