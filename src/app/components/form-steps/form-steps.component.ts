import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-steps',
  templateUrl: './form-steps.component.html',
  styleUrls: ['./form-steps.component.css']
})
export class FormStepsComponent implements OnInit {

  url: string = ""
  @Input() steps: number = 0

  constructor(private route: Router) { 
  }

  ngOnInit(): void {
    // this.url = this.route.url
  }

  ngOnChanges(): void {
    // this.url = this.route.url
  }

}
