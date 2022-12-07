import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliothequessComponent } from './bibliothequess.component';
import { FormBibliothequesComponent } from './form-bibliotheques/form-bibliotheques.component';
import { ListBibliothequesComponent } from './list-bibliotheques/list-bibliotheques.component';

const routes: Routes = [{ path: '', component: BibliothequessComponent, children:[
  {path : '', component: ListBibliothequesComponent},
  {path:'new-bibliotheque', component: FormBibliothequesComponent},
  {path:'modifier/:reference',component:FormBibliothequesComponent}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliothequessRoutingModule { }
