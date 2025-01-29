import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaApiComponent } from './prueba-api/prueba-api.component';
import { HomeComponent } from './home/home.component'
import { SnakegameComponent } from './snakegame/snakegame.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'prueba-api', component: PruebaApiComponent },
  { path: '', component: HomeComponent },
  { path: 'snakegame', component: SnakegameComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
