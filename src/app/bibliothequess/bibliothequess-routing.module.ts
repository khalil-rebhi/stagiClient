import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliothequessComponent } from './bibliothequess.component';

const routes: Routes = [{ path: '', component: BibliothequessComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BibliothequessRoutingModule { }
