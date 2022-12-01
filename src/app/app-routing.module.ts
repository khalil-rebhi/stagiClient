import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ConnexionComponent } from './shared/auth/connexion/connexion.component';
import { InscriptionComponent } from './shared/auth/inscription/inscription.component';
import { ProfileComponent } from './shared/auth/profile/profile.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { DataUserGuard } from './shared/guards/data-user.guard';

const routes: Routes = [{ path: 'stages',canActivate:[DataUserGuard,AuthGuard], loadChildren: () => import('./stages/stages.module').then(m => m.StagesModule) },
 { path: 'users',canActivate:[DataUserGuard], loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'formations',canActivate:[DataUserGuard], loadChildren: () => import('./formations/formations.module').then(m => m.FormationsModule) },
   { path: 'bibliotheques',canActivate:[DataUserGuard], loadChildren: () => import('./bibliothequess/bibliothequess.module').then(m => m.BibliothequessModule) },
    { path: 'quizs',canActivate:[DataUserGuard], loadChildren: () => import('./quizs/quizs.module').then(m => m.QuizsModule) },
    {path:'',canActivate:[DataUserGuard],component:HomeComponent},
  {path:'connexion',canActivate:[DataUserGuard],component:ConnexionComponent},
  {path:'inscription',canActivate:[DataUserGuard],component:InscriptionComponent},
  {path:'profile',canActivate:[DataUserGuard,AuthGuard],component:ProfileComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
