import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizsRoutingModule } from './quizs-routing.module';
import { QuizsComponent } from './quizs.component';
import { ListQuizComponent } from './list-quiz/list-quiz.component';


@NgModule({
  declarations: [
    QuizsComponent,
    ListQuizComponent
  ],
  imports: [
    CommonModule,
    QuizsRoutingModule
  ]
})
export class QuizsModule { }
