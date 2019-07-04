import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appIconChange]'
})
export class IconChangeDirective {
  @Input('appIconChange') public newIcon: string;

  constructor(private el: ElementRef) { }

  @HostListener('click')
  changeIcon() {
    console.log(this.newIcon);
    this.el.nativeElement.className = "fa " + this.newIcon;
    console.log(this.el);
  }
}
