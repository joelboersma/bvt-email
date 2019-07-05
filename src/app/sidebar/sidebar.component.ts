import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public windowWidth: any;
  
  public menuItems = [
    {
      name: "Inbox",
      icon: "fa-caret-down",
      badgeNum: 4
    },
    {
      name: "Drafts",
      icon: "fa-caret-right",
      badgeNum: 0
    },
    {
      name: "Sent",
      icon: "fa-caret-right",
      badgeNum: 3
    },
    {
      name: "Spam",
      icon: "fa-flag",
      badgeNum: 999
    },
    {
      name: "Trash",
      icon: "fa-times",
      badgeNum: 72
    }
  ];

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
