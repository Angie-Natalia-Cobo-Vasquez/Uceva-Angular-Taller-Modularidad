import { Component } from '@angular/core';

/**
 * Página de inicio de la aplicación.
 *
 * @remarks
 * Muestra un menú visual con tarjetas que redirigen a los módulos
 * funcionales del taller (usuarios, productos y juegos) mediante las
 * directivas de enrutamiento de Angular.
 *
 * @example
 * ```html
 * <app-home-page></app-home-page>
 * ```
 */
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  standalone: false,
})
export class HomePageComponent { }