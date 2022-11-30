import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './shared/auth/connexion/connexion.component';
import { InscriptionComponent } from './shared/auth/inscription/inscription.component';
import { ProfileComponent } from './shared/auth/profile/profile.component';

const routes: Routes = [{ path: 'stages', loadChildren: () => import('./stages/stages.module').then(m => m.StagesModule) },
 { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'formations', loadChildren: () => import('./formations/formations.module').then(m => m.FormationsModule) },
   { path: 'bibliotheques', loadChildren: () => import('./bibliothequess/bibliothequess.module').then(m => m.BibliothequessModule) },
    { path: 'quizs', loadChildren: () => import('./quizs/quizs.module').then(m => m.QuizsModule) },
  {path:'connexion',component:ConnexionComponent},
  {path:'inscription',component:InscriptionComponent},
  {path:'profile',component:ProfileComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
