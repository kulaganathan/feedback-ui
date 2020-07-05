import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, FormControlName } from '@angular/forms';

import { Questionnaire } from '../questionnaire';

@Component({
  selector: 'app-questionnaire-form',
  templateUrl: './questionnaire-form.component.html',
  styleUrls: ['./questionnaire-form.component.css']
})
export class QuestionnaireFormComponent {

  constructor(private fb: FormBuilder) { }

  questionTypes: any = ['Text Box', 'Text Area', 'Drop Down', 'Radio Button']

  get diagnostic() { return JSON.stringify(this.questionnaireForm.value); }

  onSubmit() {
    alert("Form submitted.");
  }

  questionnaireForm = this.fb.group({
    companyName: ['Enter company name here!', Validators.required],
    interviewDate: [''],
    position: ['Enter the position you applied for.'],
    isDefault: [true],
    questions: this.fb.array([
      this.fb.group({
        question: ['Enter your question here'],
        questionType: [''],
        options: this.fb.array([
          this.fb.control('')
        ])
      })
    ])
  });

  get questions() {
    console.log("Questions: ", this.questionnaireForm.get('questions'));
    return this.questionnaireForm.get('questions') as FormArray;
  }

  getOptions(i: number) {
    let fa: FormArray = this.questionnaireForm.get('questions') as FormArray;
    return fa.at(i).get('options') as FormArray;
  }

  getQuestionType(i: number) {
    let fa: FormArray = this.questionnaireForm.get('questions') as FormArray;
    return fa.at(i).get('questionType').value;
  }

  addOption(i: number) {
    console.log("i now: " + i);
    this.getOptions(i).push(this.fb.control(''));
  }

}
