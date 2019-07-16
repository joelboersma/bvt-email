import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.scss']
})
export class FormMessageComponent implements OnInit {
  private readonly messageForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.messageForm = this.fb.group({
      to: [null, [Validators.required, Validators.email]],
      cc: [null, Validators.email],
      bcc: [null, Validators.email],
      subject: null,
      message: [null, Validators.required],
      hyperlinks: this.fb.array([])
    });
  }

  ngOnInit() {
  }

  get hyperlinks() {
    return this.messageForm.get('hyperlinks') as FormArray;
  }

  onSubmit() {
    console.log(this.messageForm.value);
  }
  
  addHyperlink() {
    this.hyperlinks.push(this.fb.control(""));
  }

  removeHyperlink() {
    this.hyperlinks.removeAt(this.hyperlinks.length - 1);
  }

}
