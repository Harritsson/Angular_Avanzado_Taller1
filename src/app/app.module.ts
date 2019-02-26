import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ruta Principal
import { APP_ROUTES } from './app.routes';
// fin
// modulos
import { PagesModule } from './pages/pages.module';
// fin
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './login/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule, APP_ROUTES, PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
