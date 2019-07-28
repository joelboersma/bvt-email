import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.scss']
})
export class FormMessageComponent implements OnInit {
  private readonly messageForm: FormGroup;
  public errorMessage: string = ""
  
  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {
    this.messageForm = this.fb.group({
      to: [null, [Validators.required, Validators.email]],
      cc: [null, Validators.email],
      bcc: [null, Validators.email],
      subject: null,
      message: [null, Validators.required],
      hyperlinks: this.fb.array([])
    });

    this.messageForm.valueChanges.subscribe((value) => {
      this.changeError();
    });
  }

  ngOnInit() {
  }

  get hyperlinks() {
    return this.messageForm.get('hyperlinks') as FormArray;
  }

  onSubmit(): void {
    console.log(this.messageForm.value);
    this.router.navigate(['/']);
  }
  
  addHyperlink(): void {
    this.hyperlinks.push(this.fb.control(""));
  }

  removeHyperlink(): void {
    this.hyperlinks.removeAt(this.hyperlinks.length - 1);
  }

  changeError() {
    this.errorMessage = this.displayError();
  }

  displayError(): string {
    // Errors
    if (this.messageForm.get('to').invalid && this.messageForm.get('to').touched) {
      return "\"To\" field requires a valid email address.";
    }
    if (this.messageForm.get('cc').invalid && this.messageForm.get('cc').touched) {
      return "\"CC\" field must be empty or have a valid email address.";
    }
    if (this.messageForm.get('bcc').invalid && this.messageForm.get('bcc').touched) {
      return "\"BCC\" field must be empty or have a valid email address.";
    }
    if (this.messageForm.get('message').invalid && this.messageForm.get('message').touched) {
      return "Your message cannot be empty.";
    }

    // No errors
    return "";
  }

}
