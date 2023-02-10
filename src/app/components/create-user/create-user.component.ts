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
  passwordStrengthIndicator: string = "Empty"

  constructor(private userService: UserService, private route: Router) {
    this.user.email = ""
    this.user.password = ""
  }

  ngOnInit(): void {
    this.user = this.userService.getUser()
    if (!this.user.role)
      this.route.navigate(['/register/createRole'])
  }

  assignUser(email: string, password: string) {
    this.userService.setEmail(email)
    this.userService.setPassword(password)
    this.navigateToAdditionalInfoPage()
  }

  assignEmail(email: string): void {
    this.userService.setEmail(email)
  }

  showPasswordStrength(password: string): void {
    if (password.length > 0 && password.length <= 7)
      this.passwordStrengthIndicator = "Weak"
    else if (password.length > 7 && password.length <= 14)
      this.passwordStrengthIndicator = "Fair"
    else if (password.length > 14 && password.length <= 20)
      this.passwordStrengthIndicator = "Strong"
    else if (password.length > 20 && password.length <= 32)
      this.passwordStrengthIndicator = "Perfect"
    else
      this.passwordStrengthIndicator = "Empty"
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
