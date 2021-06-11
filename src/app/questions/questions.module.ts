import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { QuestionsRoutingModule } from './questions-routing.module';
import { AddQuestionComponent } from './add-question/add-question.component';


@NgModule({
  declarations: [
    AddQuestionComponent,
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    FormsModule
  ]
})
export class QuestionsModule { }
