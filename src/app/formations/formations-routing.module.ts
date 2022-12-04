import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormationsComponent } from './add-formations/add-formations.component';
import { FormationsComponent } from './formations.component';
import { ListFormationsComponent } from './list-formations/list-formations.component';

const routes: Routes = [{ path: '', component: FormationsComponent , children:[
  {path: '', component: ListFormationsComponent},
  {path:'ajouter-formation', component: AddFormationsComponent},
  {path:'modifier/:reference',component:AddFormationsComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationsRoutingModule { }
