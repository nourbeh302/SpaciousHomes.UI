import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-form-steps',
  templateUrl: './form-steps.component.html',
  styleUrls: ['./form-steps.component.css']
})
export class FormStepsComponent implements OnInit {

  @Input() stepCounter: number = 0

  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.stepCounter);
  }

}
