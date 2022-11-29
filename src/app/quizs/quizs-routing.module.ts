import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizsComponent } from './quizs.component';

const routes: Routes = [{ path: '', component: QuizsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizsRoutingModule { }
