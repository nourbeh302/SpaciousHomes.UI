import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private userService: UserService) {
    this.user.userId = ""
    this.user.email = ""
    this.user.password = ""
    this.user.firstName = ""
    this.user.lastName = ""
    this.user.role = ""
  }

  ngOnInit(): void {
    this.user = this.userService.getUser()
    console.log(this.user); //
  }

  assignEmail(email: string) {
    this.userService.setEmail(email)
  }

  assignPassword(password: string) {
    this.userService.setPassword(password)
  }

  togglePassword() {
    this.showPassword = !this.showPassword
  }
}
