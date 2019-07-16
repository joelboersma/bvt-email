import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() public name: string;
  @Input() public icon: string;
  @Input() public badgeNum: number;
  public badgeID: string;

  constructor() {
    
  }

  ngOnInit() {
    this.badgeID = this.name + "Badge";
    this.icon = "fa " + this.icon;
  }
}
