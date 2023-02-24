import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Corporation } from 'src/app/clients/corporation/models/Corporation';
import { CorpService } from 'src/app/clients/corporation/services/corp.service';


@Component({
  selector: 'app-additional-info',
  templateUrl: './corp-additional-info.component.html',
  styleUrls: ['./corp-additional-info.component.css']
})
export class CorpAdditionalInfoComponent implements OnInit {

  @Input() corporation: Corporation = new Corporation()

  corpNameInputError: boolean = false
  corpLocationInputError: boolean = false
  stepCounter: number = 2

  constructor(private corpService: corpService, private route: Router) { 
    this.corporation.corpName = ""
    this.corporation.corpLocation = ""
    this.corporation.taxNumber = ""
    this.corporation.corpProfileImage = ""
  }

  ngOnInit(): void {
    this.corporation = this.corpService.getcorporation()
    if (!this.corporation.role) 
      this.route.navigate(['/register/createRole'])
  }

  assigncorporation(corpName: string, corpLocation: string) {
    this.assignCorpName(corpName)
    this.assignCorpLocation(corpLocation)
    this.navigateToUploadCorpProfileImagePage() // Go to next step
  }

  assignCorpName(corpName: string) {
    this.corpService.setFirstName(corpName)
  }

  assignCorpLocation(location: string) {
    this.corpService.setArea(location)
  }

  validateCorpName(corpName: string) {
    if (corpName.length < 3)
      this.corpNameInputError = true
    else
      this.corpNameInputError = false
  }

  navigateToUploadCorpProfileImagePage() {
    this.route.navigate(['/register/uploadProfileImage'], { state: this.corporation })
  }

}
