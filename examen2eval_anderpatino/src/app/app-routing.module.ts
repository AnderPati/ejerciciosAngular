import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FacturaComponent } from './components/factura/factura.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ListaPedidosComponent } from './components/lista-pedidos/lista-pedidos.component';

const routes: Routes = [ //Rutas para acceder a los componentes
  { path: '', component: HomeComponent },
  { path: 'menus', component: ProductosComponent },
  { path: 'platos', component: ProductosComponent },
  { path: 'pedido', component: ListaPedidosComponent },
  { path: 'comprar', component: FacturaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }