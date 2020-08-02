import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, FormControlName } from '@angular/forms';

import { Questionnaire } from '../questionnaire';
import { QuestionsComponent } from '../questions/questions.component';

@Component({
  selector: 'app-questionnaire-form',
  templateUrl: './questionnaire-form.component.html',
  styleUrls: ['./questionnaire-form.component.css']
})
export class QuestionnaireFormComponent {

  @ViewChild(QuestionsComponent, {static: false}) questionsComponent: QuestionsComponent;

  constructor(private formBuilder: FormBuilder) { }

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

  addQuestion(): void {
    this.questionsComponent.questions.push(
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
