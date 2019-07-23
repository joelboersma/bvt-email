import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../_services/rest.service';
import { environment } from 'src/environments/environment';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly rest: RestService,
    private readonly auth: AuthService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.handleLogIn();
    this.router.navigate(['/']);
  }

  handleLogIn() {
    const form = this.loginForm.value;

    return this.rest.get(environment.apiURL + `/users?email=${form.email}&password=${form.password}`)
    .then(res => {
      const userId = res[0].id;
      console.log('userId', userId);
      this.auth.setUserId(userId);
    })
  }

}
