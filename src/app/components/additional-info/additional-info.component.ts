import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.css']
})
export class AdditionalInfoComponent implements OnInit {

  @Input() user: User = new User()

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

  assignUser(firstName: string, lastName: string, area: string) {
    this.assignFirstName(firstName)
    this.assignLastName(lastName)
    this.assignArea(area)
    this.navigateToUploadProfileImagePage() // Go to next step
  }

  assignFirstName(firstName: string) {
    this.userService.setFirstName(firstName)
  }

  assignLastName(lastName: string) {
    this.userService.setLastName(lastName)
  }

  assignArea(area: string) {
    this.userService.setArea(area)
  }

  navigateToUploadProfileImagePage() {
    this.route.navigate(['/register/uploadProfileImage'], { state: this.user })
  }

}
