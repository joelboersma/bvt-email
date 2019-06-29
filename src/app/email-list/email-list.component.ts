import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent implements OnInit {
  public emailContent0 = {
    subject: "Latin Jibberish Lessons",
    sender: "John Appleseed",
    date: "June 28",
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore recusandae distinctio ipsam dolores ut temporibus reprehenderit quos sit! Consectetur asperiores doloremque ipsum temporibus a quo ut vitae veritatis aliquam ex.",
    listPos: 0
  };
  public emailContent1 = {
    subject: "Latin Jibberish Lessons",
    sender: "John Appleseed",
    date: "June 28",
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore recusandae distinctio ipsam dolores ut temporibus reprehenderit quos sit! Consectetur asperiores doloremque ipsum temporibus a quo ut vitae veritatis aliquam ex.",
    listPos: 1
  };
  public emailContent2 = {
    subject: "Latin Jibberish Lessons",
    sender: "John Appleseed",
    date: "June 28",
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore recusandae distinctio ipsam dolores ut temporibus reprehenderit quos sit! Consectetur asperiores doloremque ipsum temporibus a quo ut vitae veritatis aliquam ex.",
    listPos: 2
  };
  public emailContent3 = {
    subject: "Latin Jibberish Lessons",
    sender: "John Appleseed",
    date: "June 28",
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore recusandae distinctio ipsam dolores ut temporibus reprehenderit quos sit! Consectetur asperiores doloremque ipsum temporibus a quo ut vitae veritatis aliquam ex.",
    listPos: 3
  };

  private styleRead = {
    color: '#00000000'
  }
  private styleUnread = {
    color: '#3579c7'
  }

  public startingStyle = this.styleUnread;
  public styles = [
    this.startingStyle, 
    this.startingStyle, 
    this.startingStyle, 
    this.startingStyle
  ];

  constructor() { }

  ngOnInit() {

  }

  markRead(pos: number) {
    console.log("Make me clear");
    this.styles[pos] = this.styleRead;
    console.log ("Pos " + pos + " has this color:")
    console.log(this.styles[pos]);
  }

  markUnread(pos: number) {
    console.log("Make me blue");
    this.styles[pos] = this.styleUnread;
    console.log(this.styles[pos]);
  }

  toggleRead(event) {
    console.log(event.listPos);
    if (event.read) {
      this.markRead(event.listPos);
    }
    else {
      this.markUnread(event.listPos);
    }
  }
}
