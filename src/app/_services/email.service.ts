import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(
    private readonly rest: RestService,
    private readonly auth: AuthService
  ) {}

  getEmails() {
    return this.rest.get(environment.apiURL + '/emails?userId=' + this.auth.getUserId());
  }
}