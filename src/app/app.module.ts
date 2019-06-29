import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { EmailListComponent } from './email-list/email-list.component';
import { EmailComponent } from './email/email.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainWindowComponent,
    EmailListComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
