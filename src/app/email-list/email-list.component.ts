import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent implements OnInit {
  public emailContent0 = {
    subject: "Childcare",
    sender: "Peter Fisher",
    date: "8:26 am",
    message: "Hello, I'm wondering if you would be able to watch my child on Friday evening. My wife and I are going to see Shrek 56 in theaters. We've been waiting for this for years. Let me know if you can. Thanks!",
    listPos: 0
  };
  public emailContent1 = {
    subject: "Latin Jibberish Lessons",
    sender: "Caeser",
    date: "June 28",
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore recusandae distinctio ipsam dolores ut temporibus reprehenderit quos sit! Consectetur asperiores doloremque ipsum temporibus a quo ut vitae veritatis aliquam ex.",
    listPos: 1
  };
  public emailContent2 = {
    subject: "Help Me",
    sender: "Nigerian Prince",
    date: "May 17",
    message: "paypal me 30000 usd",
    listPos: 2
  };
  public emailContent3 = {
    subject: "Super Smash Bros. Redux",
    sender: "Masahiro Sakurai",
    date: "December 7",
    message: "The next Super Smash Bros. game will have Goku. I've listened to fan feedback for years and I've been neglecting this particular character for so long. I wanted to have some bit of rules for who gets in. But this has been going on for too long. And I've finally accepted that literally anyone can get in. I hope you look forward to playing as Goku in 20XX.",
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
