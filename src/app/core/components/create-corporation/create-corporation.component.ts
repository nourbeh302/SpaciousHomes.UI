import { Component, Input , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CorpService } from 'src/app/clients/corporation/services/corp.service';
import { Corporation } from 'src/app/clients/corporation/models/Corporation';


@Component({
  selector: 'app-create-corporation',
  templateUrl: './create-corporation.component.html',
  styleUrls: ['./create-corporation.component.css']
})
export class CreateCorporationComponent implements OnInit {
  
  @Input() corporation: Corporation = new Corporation()
  showPassword: boolean = false
  emailInputError: boolean = false
  passwordInputError: boolean = false
  stepCounter: number = 1
  passwordStrengthIndicator: string = "Empty"

  constructor(private corpService: CorpService, private route: Router) {
    this.corporation.corpEmail = ""
    this.corporation.corpPassword = ""
  }

  ngOnInit(): void {
    this.corporation = this.corpService.getCorp()
    this.showPasswordStrength(this.corporation.corpPassword)
    if (!this.corporation.role)
      this.route.navigate(['/register/createRole'])
  }

  assignUser(email: string, password: string) {
    this.corpService.setEmail(email)
    this.corpService.setPassword(password)
    this.navigateToAdditionalInfoPage()
  }

  assignEmail(email: string): void {
    this.corpService.setEmail(email)
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
    this.corpService.setPassword(password)
  }

  validatePasswordInput(password: string): void {
    if (password.length < 8)
      this.passwordInputError = true
    else
      this.passwordInputError = false
  }

  validateEmailInput(email: string): void {
    var validEmailFormatRegex: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!email.match(validEmailFormatRegex))
      this.emailInputError = true
    else
      this.emailInputError = false
  }

  navigateToAdditionalInfoPage(): void {
    this.route.navigate(['/register/corp-additionalInfo'], { state: this.corporation })
  }

}
