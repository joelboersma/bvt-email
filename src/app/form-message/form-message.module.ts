import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FormMessageComponent } from './form-message.component';

const routes: Routes = [
  {
    path: '',
    component: FormMessageComponent,
    data: {
      title: "New Message - KeanuMail"
    }
  }
]

@NgModule({
  declarations: [FormMessageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class FormMessageModule {}