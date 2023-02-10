import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  @Input() user: User = new User()
  showPassword: boolean = false
  emailInputError: boolean = false
  passwordInputError: boolean = false
  stepCounter: number = 1

  constructor(private userService: UserService, private route: Router) {
    this.user.userId = ""
    this.user.email = ""
    this.user.password = ""
    this.user.firstName = ""
    this.user.lastName = ""
    this.user.role = ""
  }

  ngOnInit(): void {
    this.user = this.userService.getUser()
    if (!this.user.role)
      this.route.navigate(['/register/createRole'])

    console.log(this.user); //
  }

  assignUser(email: string, password: string) {
    this.userService.setEmail(email)
    this.userService.setPassword(password)
    this.navigateToAdditionalInfoPage() // Go to next step
  }

  assignEmail(email: string): void {
    this.userService.setEmail(email)
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword
  }

  assignPassword(password: string): void {
    this.userService.setPassword(password)
  }

  validatePasswordInput(password: string): void {
    if (password.length < 8)
      this.passwordInputError = true
    else
      this.passwordInputError = false
  }

  validateEmailInput(email: string): void {
    if (!(email.includes("@") && email.length > 0))
      this.emailInputError = true
    else
      this.emailInputError = false
  }

  navigateToAdditionalInfoPage(): void {
    this.route.navigate(['/register/additionalInfo'], { state: this.user })
  }
}
