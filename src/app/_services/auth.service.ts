import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userId: number = null;

  private readonly userIdKey: string = 'demo_userId_key';

  getUserId(): number {
    if (localStorage.getItem(this.userIdKey)) {
      this.setUserId(+localStorage.getItem(this.userIdKey));
    }

    return this.userId;
  }

  setUserId(userId: number): void {
    localStorage.setItem(this.userIdKey, userId.toString());

    this.userId = userId;
  }

  logout(): void {
    this.userId = null;
    localStorage.removeItem(this.userIdKey);
    console.log(this.userId);
  }
}