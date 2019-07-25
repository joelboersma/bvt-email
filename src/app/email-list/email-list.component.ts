import { Component, OnInit } from '@angular/core';
import { EmailService } from '../_services/email.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss']
})
export class EmailListComponent implements OnInit {
  public styleRead = {
    color: '#00000000'
  }
  public styleUnread = {
    color: '#3579c7'
  }

  public emails: Array<any> = [];
  public apiEmails: Array<any> = [];
  public readonly myEmails = [
    {
      subject: "Childcare",
      sender: "Peter Fisher",
      date: "8:26 am",
      message: "Hello, I'm wondering if you would be able to watch my child on Friday evening. My wife and I are going to see Shrek 56 in theaters. We've been waiting for this for years. Let me know if you can. Thanks!",
      listPos: 0,
      style: this.styleUnread
    },
    {
      subject: "Latin Jibberish Lessons",
      sender: "Caeser",
      date: "June 28",
      message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore recusandae distinctio ipsam dolores ut temporibus reprehenderit quos sit! Consectetur asperiores doloremque ipsum temporibus a quo ut vitae veritatis aliquam ex.",
      listPos: 1,
      style: this.styleUnread
    },
    {
      subject: "Help Me",
      sender: "Nigerian Prince",
      date: "April 20",
      message: "paypal me 30000 usd",
      listPos: 2,
      style: this.styleUnread
    },
    {
      subject: "Super Smash Bros. Redux",
      sender: "Masahiro Sakurai",
      date: "December 7",
      message: "The next Super Smash Bros. game will have Goku. I've listened to fan feedback for years and I've been neglecting this particular character for so long. I wanted to have some bit of rules for who gets in. But this has been going on for too long. And I've finally accepted that literally anyone can get in. I hope you look forward to playing as Goku in 20XX.",
      listPos: 3,
      style: this.styleUnread
    },
    {
      subject: "Final Remarks",
      sender: "French Soldier",
      date: "March 4, 1563",
      message: "Your mother was a hamster, and your father smelt of elderberries!",
      listPos: 4,
      style: this.styleUnread
    },
    {
      subject: "My Order",
      sender: "Big Smoke",
      date: "October 26, 2004",
      message: "I'll have two number nines, a number nine large, a number six with extra dip, a number seven, two number 45s, one with cheese, and a large soda.",
      listPos: 5,
      style: this.styleUnread
    }
  ];

  constructor(
    private readonly emailService: EmailService,
    private readonly auth: AuthService
  ) { }

  ngOnInit() {
    if (this.auth.getUserId() === 0) {
      this.emails = this.myEmails;
    } else {
      this.emailService.getEmails().then(data => {
        // Copy emails from API into apiEmails
       this.apiEmails = data;
       
       // Use whatever fields possible from apiEmails.
       // The missing ones come from myEmails.
       this.emails = this.myEmails;
       while (this.apiEmails.length != this.emails.length) {
         this.emails.pop();
       }
       this.emails.forEach(email => {
         email.subject = this.apiEmails[email.listPos].subject;
         email.message = this.apiEmails[email.listPos].body;
       });
     });
    }
  }

  markRead(pos: number) {
    this.emails[pos].style = this.styleRead;
  }

  markUnread(pos: number) {
    this.emails[pos].style = this.styleUnread;
  }

  toggleRead(event) {
    if (event.read) {
      this.markRead(event.listPos);
    }
    else {
      this.markUnread(event.listPos);
    }
  }
}
