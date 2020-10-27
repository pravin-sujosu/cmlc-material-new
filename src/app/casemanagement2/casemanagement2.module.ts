import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Casemanagement2RoutingModule } from './casemanagement2-routing.module';
import { Management2Component } from './management2/management2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../core/material.module';
import { TranslocoRootModule } from '../transloco-root.module';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [Management2Component],
  imports: [
    CommonModule,
    Casemanagement2RoutingModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule,
    TranslocoRootModule,
    FlexLayoutModule
  ]
})
export class Casemanagement2Module { }
