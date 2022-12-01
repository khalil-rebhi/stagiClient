import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StagesRoutingModule } from './stages-routing.module';
import { StagesComponent } from './stages.component';
import { ListStagesComponent } from './list-stages/list-stages.component';
import { FormStageComponent } from './form-stage/form-stage.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StagesComponent,
    ListStagesComponent,
    FormStageComponent
  ],
  imports: [
    CommonModule,
    StagesRoutingModule,
    ReactiveFormsModule
  ]
})
export class StagesModule { }
