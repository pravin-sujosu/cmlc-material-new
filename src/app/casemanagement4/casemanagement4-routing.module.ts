import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Management4Component } from './management4/management4.component';


const routes: Routes = [
  {
    path: '',
    component: Management4Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Casemanagement4RoutingModule { }
