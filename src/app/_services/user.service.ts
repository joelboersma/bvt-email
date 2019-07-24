import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private readonly rest: RestService,
    private readonly auth: AuthService
  ) {}

  userExist(email: string): boolean {
    return this.getUser(email) != null;
  }

  getUser(email: string) {
    return this.rest.get(environment.apiURL + "/users?email=" + email)
  }
}