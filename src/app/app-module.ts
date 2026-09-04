import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared-module';

/**
 * Módulo raíz de la aplicación.
 *
 * @remarks
 * Es el punto de entrada de la aplicación Angular. Declara y arranca el
 * {@link AppComponent}, importa el módulo compartido y el enrutador raíz, y
 * habilita `HttpClient` a nivel global para el consumo de APIs.
 */
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
