import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Casemanagement1RoutingModule } from './casemanagement1-routing.module';
import { Management1Component } from './management1/management1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../core/material.module';
import { TranslocoRootModule } from '../transloco-root.module';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [Management1Component],
  imports: [
    CommonModule,
    Casemanagement1RoutingModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule,
    TranslocoRootModule,
    FlexLayoutModule
  ]
})
export class Casemanagement1Module { }
