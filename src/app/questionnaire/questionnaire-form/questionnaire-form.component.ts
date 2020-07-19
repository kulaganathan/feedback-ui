import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, FormControlName } from '@angular/forms';

import { Questionnaire } from '../questionnaire';

@Component({
  selector: 'app-questionnaire-form',
  templateUrl: './questionnaire-form.component.html',
  styleUrls: ['./questionnaire-form.component.css']
})
export class QuestionnaireFormComponent {

  constructor(private formBuilder: FormBuilder) { }

  questionTypes: string[] = ['Text Box', 'Text Area', 'Drop Down', 'Radio Button'];

  questionnaireForm = this.formBuilder.group({
    companyName: ['Enter company name here!', Validators.required],
    interviewDate: [''],
    position: ['Enter the position you applied for.'],
    isDefault: [true],
    questions: this.formBuilder.array([
      this.formBuilder.group({
        question: ['Enter your question here'],
        questionType: [''],
        options: this.formBuilder.array([
          this.formBuilder.control('')
        ])
      })
    ])
  });

  onSubmit() {
    alert('Form submitted.');
  }

  get diagnostic() { return JSON.stringify(this.questionnaireForm.value); }

  get questions() {
    console.log('Questions: ', this.questionnaireForm.get('questions'));
    return this.questionnaireForm.get('questions') as FormArray;
  }

  getOptions(i: number) {
    const fa: FormArray = this.questionnaireForm.get('questions') as FormArray;
    return fa.at(i).get('options') as FormArray;
  }

  getQuestionType(i: number) {
    const fa: FormArray = this.questionnaireForm.get('questions') as FormArray;
    return fa.at(i).get('questionType').value;
  }

  addOption(i: number) {
    console.log('i now: ' + i);
    this.getOptions(i).push(this.formBuilder.control(''));
  }

  addQuestion(): void {
    this.questions.push(
      this.formBuilder.group({
        question: ['Enter your question here'],
        questionType: [''],
        options: this.formBuilder.array([
          this.formBuilder.control('')
        ])
      })
    );
  }

}
