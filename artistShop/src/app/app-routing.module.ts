import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListadoArticulosComponent } from './listado-articulos/listado-articulos.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'listado', component: ListadoArticulosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
