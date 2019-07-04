import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public windowWidth: any;

  public itemWithBadge: string = "Inbox";
  public badgeNumber: number = 2;

  constructor() { }

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
