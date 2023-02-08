import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-upload-profile-image',
  templateUrl: './upload-profile-image.component.html',
  styleUrls: ['./upload-profile-image.component.css']
})
export class UploadProfileImageComponent implements OnInit {

  @Input() user: User = new User()


  constructor(private userService: UserService, private route: Router) { 
    this.user.userId = ""
    this.user.email = ""
    this.user.password = ""
    this.user.firstName = ""
    this.user.lastName = ""
    this.user.role = ""
    this.user.profileImage = ""
  }

  ngOnInit(): void {
    this.user = this.userService.getUser()
    if (!this.user.role) 
      this.route.navigate(['/register/createRole'])
      
    console.log(this.user); //
  }

  submitCreateUserForm() {
    
  }

  onImgSelected(event)  {

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e :any) => {
      this.user.profileImage = e.target.result;
    }
    
  }

}
