import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  @Input() questionnaireForm: FormGroup;

  questionTypes: string[] = ['Text Box', 'Text Area', 'Drop Down', 'Radio Button'];

  constructor() { }

  ngOnInit() {
  }

  get questions(): FormArray {
    return this.questionnaireForm.get('questions') as FormArray;
  }

  getQuestionType(i: number) {
    const fa: FormArray = this.questionnaireForm.get('questions') as FormArray;
    return fa.at(i).get('questionType').value;
  }

  getOptions(i: number) {
    const fa: FormArray = this.questionnaireForm.get('questions') as FormArray;
    return fa.at(i).get('options') as FormArray;
  }

  addOption(i: number) {
    console.log('i now: ' + i);
    this.getOptions(i).push(new FormControl(''));
  }

}
