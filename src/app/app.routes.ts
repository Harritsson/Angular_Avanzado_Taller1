import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegistroComponent } from './login/registro.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registro', component: RegistroComponent},
    // redirecciones
    { path: '**', component: NopagefoundComponent }
];
// rutas principales
export const APP_ROUTES = RouterModule.forRoot(routes, {useHash: true } );
