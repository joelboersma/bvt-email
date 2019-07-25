import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-form-signup',
  templateUrl: './form-signup.component.html',
  styleUrls: ['./form-signup.component.scss']
})
export class FormSignupComponent implements OnInit {
  private signupForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly auth: AuthService
  ) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      retypePassword: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.signupForm.value);
    this.auth.setUserId(0);
    console.log(this.auth.getUserId());
    this.router.navigate(['/']);
  }

  passwordMatch(): boolean {
    return this.signupForm.value.password === this.signupForm.value.retypePassword;
  }
}


