import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Casemanagement4RoutingModule } from './casemanagement4-routing.module';
import { Management4Component } from './management4/management4.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../core/material.module';
import { TranslocoRootModule } from '../transloco-root.module';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [Management4Component],
  imports: [
    CommonModule,
    Casemanagement4RoutingModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule,
    TranslocoRootModule,
    FlexLayoutModule
  ]
})
export class Casemanagement4Module { }
