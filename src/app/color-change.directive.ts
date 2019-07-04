import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorChange]'
})
export class ColorChangeDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')
  changeColorOnClick() {
    // Generate Text Color Values
    var textR = Math.floor(Math.random() * 256);
    var textG = Math.floor(Math.random() * 256);
    var textB = Math.floor(Math.random() * 256);

    // Generate Background Color Values
    var backgroundR = Math.floor(Math.random() * 256);
    var backgroundG = Math.floor(Math.random() * 256);
    var backgroundB = Math.floor(Math.random() * 256);

    // Apply Styles
    this.applyStyles(
      'rgb(' + textR + ', ' + textG +', ' + textB + ')',
      'rgb(' + backgroundR + ', ' + backgroundG +', ' + backgroundB + ')'
      )
  }

  applyStyles(textColor: string, backgroundColor: string): void {
    this.el.nativeElement.style.color = textColor;
    this.el.nativeElement.style.backgroundColor = backgroundColor;
  }
}
