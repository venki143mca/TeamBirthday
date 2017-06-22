import { Route, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { UserComponent } from './user.login.component'

const routes: Route[] = [
    {
        path: '',
        component: UserComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);