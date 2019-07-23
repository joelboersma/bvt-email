import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  //@Input() emailContent;
  @Input() public subject: string;
  @Input() public sender: string;
  @Input() public date: string;
  @Input() public message: string;
  @Input() public listPos: number;

  public read: boolean = false;
  @Output() readEmit: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    
  }

  onClick(): void {
    this.read = !this.read;
    console.log(this.read);
    this.readEmit.emit({
      read: this.read,
      listPos: this.listPos
    });
  }
}
