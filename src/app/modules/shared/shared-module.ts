import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BadgeComponent } from './components/badge/badge.component';
import { IconComponent } from './components/icon/icon.component';
import { NavbarComponent } from './components/navbar/navbar.component';

/**
 * Módulo compartido de la aplicación.
 *
 * @remarks
 * Declara y exporta los componentes reutilizables del sistema de diseño atómico:
 * {@link BadgeComponent}, {@link IconComponent} y {@link NavbarComponent}.
 * Es importado por los módulos de funcionalidad que los requieren.
 */
@NgModule({
  declarations: [
    BadgeComponent,
    IconComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    BadgeComponent,
    IconComponent,
    NavbarComponent,
  ]
})
export class SharedModule { }
