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

  setFirstName(firstName: string): void {
    this.user.firstName = firstName
  }

  setLastName(lastName: string): void {
    this.user.lastName = lastName
  }

  setArea(location: string): void {
    this.user.userLocation = location
  }

  setProfileImage(profileImage: string): void {
    this.user.profileImage = profileImage
  }
}
