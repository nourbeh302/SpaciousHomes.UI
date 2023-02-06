import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-upload-profile-image',
  templateUrl: './upload-profile-image.component.html',
  styleUrls: ['./upload-profile-image.component.css']
})
export class UploadProfileImageComponent implements OnInit {

  @Input() user: User = new User()

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
