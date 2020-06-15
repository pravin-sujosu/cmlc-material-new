import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactManagementRoutingModule } from './contact-management-routing.module';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../core/material.module';
import { TranslocoRootModule } from '../transloco-root.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactManagementRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TranslocoRootModule,
    FlexLayoutModule
  ]
})
export class ContactManagementModule { }
