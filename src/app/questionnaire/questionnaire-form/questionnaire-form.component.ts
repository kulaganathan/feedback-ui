import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { Questionnaire } from '../questionnaire';

@Component({
  selector: 'app-questionnaire-form',
  templateUrl: './questionnaire-form.component.html',
  styleUrls: ['./questionnaire-form.component.css']
})
export class QuestionnaireFormComponent {

  model = new Questionnaire('Enter company name here.', 'Enter interview date here', false, 'Enter interview position here');
  submitted = false;

  constructor(private fb: FormBuilder) { }

  get diagnostic() { return JSON.stringify(this.questionnaireForm.value); }

  onSubmit() {
    alert("Form submitted.");
  }

  questionnaireForm = this.fb.group({
    companyName: ['Enter company name here!', Validators.required],
    interviewDate: [''],
    position: ['Enter the position you applied for.'],
    isDefault: [true],
    questions: this.fb.group({
      question: ['Enter your question here'],
    })
  });

}
