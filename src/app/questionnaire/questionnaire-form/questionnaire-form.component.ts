import { Component, OnInit } from '@angular/core';
import { Questionnaire } from '../questionnaire';

@Component({
  selector: 'app-questionnaire-form',
  templateUrl: './questionnaire-form.component.html',
  styleUrls: ['./questionnaire-form.component.css']
})
export class QuestionnaireFormComponent {

  model = new Questionnaire('Enter company name here.', 'Enter interview date here', false, 'Enter interview position here');
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  get diagnostic() { return JSON.stringify(this.model); }


}
