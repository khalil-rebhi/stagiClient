import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListQuizComponent } from './list-quiz/list-quiz.component';
import { QuizsComponent } from './quizs.component';

const routes: Routes = [{ path: '', component: QuizsComponent ,children:[
  {path:'', component:ListQuizComponent},
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizsRoutingModule { }
