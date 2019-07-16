import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FormSignupComponent } from './form-signup.component';

const routes: Routes = [
  {
    path: '',
    component: FormSignupComponent,
    data: {
      title: "Sign Up - KeanuMail"
    }
  }
]

@NgModule({
  declarations: [FormSignupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class FormSignupModule{}