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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
