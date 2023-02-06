import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {

  @Input() user: User

  constructor(private userService: UserService, private route: Router) {
    this.user = this.userService.getUser()
  }

  ngOnInit(): void {
  }

  assignRole(role: string) {
    this.userService.setRole(role)
    this.route.navigate(['/register/createUser'], { state: this.user })
  }

}
