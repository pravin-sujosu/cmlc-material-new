import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Casemanagement3RoutingModule } from './casemanagement3-routing.module';
import { Management3Component } from './management3/management3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../core/material.module';
import { TranslocoRootModule } from '../transloco-root.module';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [Management3Component],
  imports: [
    CommonModule,
    Casemanagement3RoutingModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule,
    TranslocoRootModule,
    FlexLayoutModule
  ]
})
export class Casemanagement3Module { }
