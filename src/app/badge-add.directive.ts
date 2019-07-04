import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBadgeAdd]'
})
export class BadgeAddDirective {
  @Input() public badgeNum: number;
  @Input() public itemName: string;

  constructor(private el: ElementRef) { }

  @HostListener('click')
  addBadge() {
    console.log(this.el);

    this.el.nativeElement.innerHTML = this.itemName + 
      "<span class=\"badge\">"
      + this.badgeNum + "</span>"
  }
}
