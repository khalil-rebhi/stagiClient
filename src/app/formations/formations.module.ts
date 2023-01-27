import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationsRoutingModule } from './formations-routing.module';
import { FormationsComponent } from './formations.component';
import { ListFormationsComponent } from './list-formations/list-formations.component';
import { AddFormationsComponent } from './add-formations/add-formations.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AsideFormationsComponent } from './aside-formations/aside-formations.component';
import { UserListFormationsComponent } from './user-list-formations/user-list-formations.component';
import { CardFormationComponent } from './card-formation/card-formation.component';


@NgModule({
  declarations: [
    FormationsComponent,
    ListFormationsComponent,
    AddFormationsComponent,
    AsideFormationsComponent,
    UserListFormationsComponent,
    CardFormationComponent
  ],
  imports: [
    CommonModule,
    FormationsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormationsModule { }
