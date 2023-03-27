import { Component, ViewChild, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.css'],
})
export class CollapsibleComponent {
  public isOpen = false;
  public openDisplayText = 'Show less';
  public closedDisplayText = 'Show more';
  public displayText = this.closedDisplayText;

  @ViewChild('fadding')
  public fadding!: ElementRef<HTMLElement>;

  @ContentChild('content')
  public content!: ElementRef<HTMLElement>;

  public toggle(): void {
    this.content.nativeElement.classList.toggle('max-h-full');
    this.fadding.nativeElement.classList.toggle('fadding');

    this.isOpen = !this.isOpen;
    if (this.isOpen) this.displayText = this.openDisplayText;
    else this.displayText = this.closedDisplayText;
  }
}
