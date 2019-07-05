import { Directive, Input, HostListener, ElementRef, Output } from '@angular/core';

@Directive({
  selector: '[appBadgeAdd]'
})
export class BadgeAddDirective {
  @Input("appBadgeAdd") public badgeID: string;

  constructor(private el: ElementRef) { }

  @HostListener('click')
  addBadge() {
    document.getElementById(this.badgeID).removeAttribute("hidden");
  }
}
