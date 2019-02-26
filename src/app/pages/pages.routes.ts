import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// componentes de rutas
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';


const pagesRoutes: Routes = [
    { path: '', component: PagesComponent, children: [
        { path: 'inicio', component: DashboardComponent },
        { path: 'proceso', component: ProgressComponent},
        { path: 'graficas', component: Graficas1Component},
        { path: '', pathMatch: 'full', redirectTo: 'inicio'}

    ]},
];
export  const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
