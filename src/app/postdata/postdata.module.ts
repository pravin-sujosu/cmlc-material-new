import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostdataModuleRoutingModule } from './postdata-routing.module';
import { Postdatafrm } from './postdatafrm/postdatafrm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../core/material.module';
import { TranslocoRootModule } from '../transloco-root.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [Postdatafrm],
  imports: [
    CommonModule,
    PostdataModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslocoRootModule,
    FlexLayoutModule,
  ],
})
export class PostdataModule {}
