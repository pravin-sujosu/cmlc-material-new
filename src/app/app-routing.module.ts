import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'case-management',
    loadChildren: () =>
      import('./casemanagement/casemanagement.module').then(
        (m) => m.CasemanagementModule
      ),
  },
  {
    path: 'case-management1',
    loadChildren: () =>
      import('./casemanagement1/casemanagement1.module').then(
        (m) => m.Casemanagement1Module
      ),
  },
  {
    path: 'case-management2',
    loadChildren: () =>
      import('./casemanagement2/casemanagement2.module').then(
        (m) => m.Casemanagement2Module
      ),
  },
  {
    path: 'legal-consultation',
    loadChildren: () =>
      import('./legal-consultation/legal-consultation.module').then(
        (m) => m.LegalConsultationModule
      ),
  },
  {
    path: 'access-log',
    loadChildren: () =>
      import('./access-log/access-log.module').then(
        (m) => m.AccessLogModule
      ),
  },
  {
    path: 'contact-management',
    loadChildren: () =>
      import('./contact-management/contact-management.module').then(
        (m) => m.ContactManagementModule
      ),
  },
  {
    path: 'postdata',
    loadChildren: () =>
      import('./postdata/postdata.module').then(
        (m) => m.PostdataModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
