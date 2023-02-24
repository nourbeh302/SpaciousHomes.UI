import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CorpService } from 'src/app/clients/corporation/services/corp.service';
import { Corporation } from 'src/app/clients/corporation/models/Corporation';


@Component({
  selector: 'app-create-corporation',
  templateUrl: './create-corporation.component.html',
  styleUrls: ['./create-corporation.component.css']
})
export class CreateCorporationComponent implements OnInit {
  

  ngOnInit(): void {
  }


}
