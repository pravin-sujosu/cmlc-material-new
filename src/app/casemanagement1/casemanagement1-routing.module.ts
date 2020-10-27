import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Management1Component } from './management1/management1.component';


const routes: Routes = [
  {
    path: '',
    component: Management1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Casemanagement1RoutingModule { }
