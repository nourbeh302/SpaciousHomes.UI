import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.css']
})
export class AdditionalInfoComponent implements OnInit {

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
