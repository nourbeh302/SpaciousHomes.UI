import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User()
  steps: number = 0

  constructor() {
    this.user.userId = ""
    this.user.email = ""
    this.user.password = ""
    this.user.firstName = ""
    this.user.lastName = ""
    this.user.role = ""
  }

  ngOnInit(): void { 
  }

}
