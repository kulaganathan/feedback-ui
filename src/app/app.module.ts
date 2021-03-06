import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionnaireFormComponent } from './questionnaire/questionnaire-form/questionnaire-form.component';
import { QuestionsComponent } from './questionnaire/questions/questions.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireFormComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
