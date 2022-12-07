import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibliothequessRoutingModule } from './bibliothequess-routing.module';
import { BibliothequessComponent } from './bibliothequess.component';
import { ListBibliothequesComponent } from './list-bibliotheques/list-bibliotheques.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBibliothequesComponent } from './form-bibliotheques/form-bibliotheques.component';


@NgModule({
  declarations: [
    BibliothequessComponent,
    ListBibliothequesComponent,
    FormBibliothequesComponent
  ],
  imports: [
    CommonModule,
    BibliothequessRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BibliothequessModule { }
