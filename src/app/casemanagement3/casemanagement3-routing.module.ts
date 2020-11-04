import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Management3Component } from './management3/management3.component';


const routes: Routes = [
  {
    path: '',
    component: Management3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Casemanagement3RoutingModule { }
