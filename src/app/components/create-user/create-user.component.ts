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

  assignEmail(email: string) {
    this.userService.setEmail(email)
  }

  assignPassword(password: string) {
    this.userService.setPassword(password)
  }

  navigateToAdditionalInfoPage() {
    this.route.navigate(['/register/additionalInfo'], { state: this.user })
  }

  togglePassword() {
    this.showPassword = !this.showPassword
  }
}
