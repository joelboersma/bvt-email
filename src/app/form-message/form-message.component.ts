import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-message',
  templateUrl: './form-message.component.html',
  styleUrls: ['./form-message.component.scss']
})
export class FormMessageComponent implements OnInit {
  /** 
   * For hyperlinks do the following:
   * -Make an "add hyperlink" button
   * -Have the form include an array of strings for hyperlinks.
   * -Use an ngFor to display each hyperlink
  */

  private messageForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.messageForm = this.fb.group({
      to: [null, [Validators.required, Validators.email]],
      cc: [null, Validators.email],
      bcc: [null, Validators.email],
      subject: null,
      message: [null, Validators.required]
      // hyperlinks: new Array<string>("")
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.messageForm.value);
  }
  
  // addHyperlink() {
  //   this.messageForm.value.hyperlinks.push("");
  // }

}
