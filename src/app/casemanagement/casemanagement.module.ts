import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasemanagementRoutingModule } from './casemanagement-routing.module';
import { ManagementComponent } from './management/management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../core/material.module';
import { TranslocoRootModule } from '../transloco-root.module';
import { FlexLayoutModule } from '@angular/flex-layout';
@NgModule({
  declarations: [ManagementComponent],
  imports: [
    CommonModule,
    CasemanagementRoutingModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule,
    TranslocoRootModule,
    FlexLayoutModule
  ]
})
export class CasemanagementModule { }
