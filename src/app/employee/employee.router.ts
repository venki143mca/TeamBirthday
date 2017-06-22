import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { EmployeeComponent } from './employee.list.component';

const routes: Route[] = [
   {
    path: '',
    component: EmployeeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
