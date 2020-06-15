import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LegalConsultationRoutingModule } from './legal-consultation-routing.module';
import { LegalComponent } from './legal/legal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../core/material.module';
import { TranslocoRootModule } from '../transloco-root.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [LegalComponent],
  imports: [
    CommonModule,
    LegalConsultationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslocoRootModule,
    FlexLayoutModule,
  ],
})
export class LegalConsultationModule {}
