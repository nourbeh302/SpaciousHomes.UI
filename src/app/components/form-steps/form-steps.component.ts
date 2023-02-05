import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-steps',
  templateUrl: './form-steps.component.html',
  styleUrls: ['./form-steps.component.css']
})
export class FormStepsComponent implements OnInit {

  // @Input() steps: number;

  constructor() { 
    // this.steps = 0
  }

  ngOnInit(): void {
    // this.steps = 3
  }

}
