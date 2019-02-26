import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegistroComponent } from './login/registro.component';


const routes: Routes = [
    { path: '', component: PagesComponent, children: [
        { path: 'inicio', component: DashboardComponent },
        { path: 'proceso', component: ProgressComponent},
        { path: 'graficas', component: Graficas1Component},
        { path: '', pathMatch: 'full', redirectTo: 'inicio'}

    ]},
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent},
    // redirecciones
    { path: '**', component: NopagefoundComponent }
];
// rutas principales
export const APP_ROUTES = RouterModule.forRoot(routes, {useHash: true } );
