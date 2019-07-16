import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FormLoginComponent } from './form-login.component';

const routes: Routes = [
  {
    path: '',
    component: FormLoginComponent,
    data: {
      title: 'Log In - KeanuMail'
    }
  }
]

@NgModule({
  declarations: [FormLoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class FormLoginModule{}