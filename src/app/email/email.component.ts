import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  @Input() emailContent;
  public subject: string;
  public sender: string;
  public date: string;
  public message: string;
  public listPos: number;

  public read: boolean = false;
  @Output() readEmit: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    
  }

  ngOnInit() {
    this.subject = this.emailContent.subject;
    this.sender = this.emailContent.sender;
    this.date = this.emailContent.date;
    this.message = this.emailContent.message;
    this.listPos = this.emailContent.listPos;
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
