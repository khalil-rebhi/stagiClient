import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BibliothequessRoutingModule } from './bibliothequess-routing.module';
import { BibliothequessComponent } from './bibliothequess.component';
import { ListBibliothequesComponent } from './list-bibliotheques/list-bibliotheques.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBibliothequesComponent } from './form-bibliotheques/form-bibliotheques.component';
import { ListBooksComponent } from './list-books/list-books.component';


@NgModule({
  declarations: [
    BibliothequessComponent,
    ListBibliothequesComponent,
    FormBibliothequesComponent,
    ListBooksComponent
  ],
  imports: [
    CommonModule,
    BibliothequessRoutingModule,
    FormsModule,
    ReactiveFormsModule    
  ]
})
export class BibliothequessModule { }
