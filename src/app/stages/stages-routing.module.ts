import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormStageComponent } from './form-stage/form-stage.component';
import { ListStagesComponent } from './list-stages/list-stages.component';
import { StagesComponent } from './stages.component';

const routes: Routes = [{ path: '', component: StagesComponent ,children:[
  {path:'', component:ListStagesComponent},
  {path:'ajouter', component:FormStageComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StagesRoutingModule { }
