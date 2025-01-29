import { Component, OnInit } from '@angular/core';
import { ArticulosService } from '../services/articulos.service';

@Component({
  selector: 'app-listado-articulos',
  templateUrl: './listado-articulos.component.html',
  styleUrls: ['./listado-articulos.component.scss']
})
export class ListadoArticulosComponent implements OnInit {
  productos: any;

  constructor(public _articulosService: ArticulosService) {}

  ngOnInit(): void {
    this._articulosService.recuperarTodos()
      .then(data => {
        this.productos = data;
        console.log(data);
      })
  }
}
