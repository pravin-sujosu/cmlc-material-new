import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Management2Component } from './management2/management2.component';


const routes: Routes = [
  {
    path: '',
    component: Management2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Casemanagement2RoutingModule { }
