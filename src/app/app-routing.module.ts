import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'stages', loadChildren: () => import('./stages/stages.module').then(m => m.StagesModule) }, { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }, { path: 'formations', loadChildren: () => import('./formations/formations.module').then(m => m.FormationsModule) }, { path: 'bibliotheques', loadChildren: () => import('./bibliothequess/bibliothequess.module').then(m => m.BibliothequessModule) }, { path: 'quizs', loadChildren: () => import('./quizs/quizs.module').then(m => m.QuizsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
