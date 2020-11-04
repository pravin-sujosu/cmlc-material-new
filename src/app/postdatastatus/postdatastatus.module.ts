import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostdataModulestatusRoutingModule } from './postdatastatus-routing.module';
import { Postdatafrmstatus } from './postdatafrmstatus/postdatafrmstatus.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../core/material.module';
import { TranslocoRootModule } from '../transloco-root.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [Postdatafrmstatus],
  imports: [
    CommonModule,
    PostdataModulestatusRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslocoRootModule,
    FlexLayoutModule,
  ],
})
export class PostdatastatusModule {}
