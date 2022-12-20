import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormQuizComponent } from './form-quiz/form-quiz.component';
import { ListQuizComponent } from './list-quiz/list-quiz.component';
import { QuizsComponent } from './quizs.component';

const routes: Routes = [{ path: '', component: QuizsComponent ,children:[
  {path:'', component:ListQuizComponent},
  {path:'new-quiz',component:FormQuizComponent},
  {path:'modifier/:idQuiz',component:FormQuizComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizsRoutingModule { }
