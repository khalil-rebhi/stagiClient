import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BibliothequessRoutingModule } from './bibliothequess-routing.module';
import { BibliothequessComponent } from './bibliothequess.component';


@NgModule({
  declarations: [
    BibliothequessComponent
  ],
  imports: [
    CommonModule,
    BibliothequessRoutingModule
  ]
})
export class BibliothequessModule { }
