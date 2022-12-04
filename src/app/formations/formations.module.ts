import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationsRoutingModule } from './formations-routing.module';
import { FormationsComponent } from './formations.component';
import { ListFormationsComponent } from './list-formations/list-formations.component';
import { AddFormationsComponent } from './add-formations/add-formations.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormationsComponent,
    ListFormationsComponent,
    AddFormationsComponent
  ],
  imports: [
    CommonModule,
    FormationsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormationsModule { }
