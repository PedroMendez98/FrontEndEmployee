import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'list',
        loadComponent: () => import('./employee-list/employee-list.component').then(m => m.EmployeeListComponent)
    },
    {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'employeeall',
        loadComponent: () => import('./employee-all/employee-all.component').then(m => m.EmployeeAllComponent)
    },
    {
        path: 'information',
        loadComponent: () => import('./information/information.component').then(m => m.InformationComponent)
    }
];
