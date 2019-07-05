import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appIconChange]'
})
export class IconChangeDirective {
  @Input('appIconChange') public newIcon: string;

  constructor(private el: ElementRef) { }

  @HostListener('click')
  changeIcon() {
    this.el.nativeElement.className = "fa " + this.newIcon;
  }
}
