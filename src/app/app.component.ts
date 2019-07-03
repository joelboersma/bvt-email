import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'week-one-project';
  public windowWidth: any;

  ngOnInit() {
    this.windowWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  whenResize(event) {
    this.windowWidth = window.innerWidth;
  }

  useBigView(): boolean {
    return this.windowWidth >= 768;
  }
}