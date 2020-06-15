import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessLogRoutingModule } from './access-log-routing.module';
import { LogComponent } from './log/log.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../core/material.module';
import { TranslocoRootModule } from '../transloco-root.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [LogComponent],
  imports: [
    CommonModule,
    AccessLogRoutingModule,
    FormsModule, ReactiveFormsModule,
    MaterialModule,
    TranslocoRootModule,
    FlexLayoutModule
  ]
})
export class AccessLogModule { }
