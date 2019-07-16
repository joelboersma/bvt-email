import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { EmailListComponent } from './email-list/email-list.component';
import { EmailComponent } from './email/email.component';
import { ColorChangeDirective } from './color-change.directive';
import { IconChangeDirective } from './icon-change.directive';
import { BadgeAddDirective } from './badge-add.directive';
import { MenuItemComponent } from './menu-item/menu-item.component';
// import { FormLoginComponent } from './form-login/form-login.component';
// import { FormSignupComponent } from './form-signup/form-signup.component';
// import { FormMessageComponent } from './form-message/form-message.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: {
      title: 'KeanuMail'
    }
  },
  {
    path: 'login',
    loadChildren: () => import('./form-login/form-login.module').then(m => m.FormLoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./form-signup/form-signup.module').then(m => m.FormSignupModule)
  },
  {
    path: 'newmessage',
    loadChildren: () => import('./form-message/form-message.module').then(m => m.FormMessageModule)
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainWindowComponent,
    EmailListComponent,
    EmailComponent,
    ColorChangeDirective,
    IconChangeDirective,
    BadgeAddDirective,
    MenuItemComponent,
    // FormLoginComponent,
    // FormSignupComponent,
    // FormMessageComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    // ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
