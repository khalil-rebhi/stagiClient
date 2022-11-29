import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizsRoutingModule } from './quizs-routing.module';
import { QuizsComponent } from './quizs.component';


@NgModule({
  declarations: [
    QuizsComponent
  ],
  imports: [
    CommonModule,
    QuizsRoutingModule
  ]
})
export class QuizsModule { }
