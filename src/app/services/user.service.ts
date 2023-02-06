import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User = new User()

  constructor() { }

  getUser(): User {
    return this.user
  }

  setRole(role: string): void {
    this.user.role = role
  }

  setEmail(email: string): void {
    this.user.email = email
  }

  setPassword(password: string): void {
    this.user.password = password
  }
}
