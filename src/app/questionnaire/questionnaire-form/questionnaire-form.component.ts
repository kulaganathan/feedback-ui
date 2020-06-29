import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { Questionnaire } from '../questionnaire';

@Component({
  selector: 'app-questionnaire-form',
  templateUrl: './questionnaire-form.component.html',
  styleUrls: ['./questionnaire-form.component.css']
})
export class QuestionnaireFormComponent {

  constructor(private fb: FormBuilder) { }

  questionTypes: any=['Text Box', 'Text Area', 'Drop Down', 'Radio Button']

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
      questionType: [''],
      options: this.fb.array([
        this.fb.control('')
      ])
    })
  });

  get options() {
    return this.questionnaireForm.get('questions').get('options') as FormArray;
  }


  addOption(){
    alert('add option clicked!');
    this.options.push(this.fb.control(''));
  }

}
