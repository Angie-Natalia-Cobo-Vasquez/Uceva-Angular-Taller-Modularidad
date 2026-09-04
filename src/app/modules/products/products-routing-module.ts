import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './pages/list-products/list-products.component';

/**
 * Módulo de rutas del módulo de productos.
 *
 * @remarks
 * Define las rutas hijas disponibles bajo `/products`. La ruta por defecto
 * de la sección redirige a la página {@link ListProductsComponent}.
 */
const routes: Routes = [
  {
    path: 'list-products',
    component: ListProductsComponent
  },
  {
    path: '**',
    redirectTo: 'list-products'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
