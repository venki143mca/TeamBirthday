import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { loadChildren: 'app/employee/employee.module#EmployeeModule', path: 'employee' },
  { loadChildren: 'app/user/user.module#UserModule', path: 'login' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: true
  }
);
