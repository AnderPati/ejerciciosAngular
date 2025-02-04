import { Component,OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { MenusService } from 'src/app/services/menus.service';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.scss']
})

export class ListaPedidosComponent implements OnInit {

  productos: Product[] = []; //Array donde guardare la lista de productos seleccionados

  constructor(private menusService: MenusService) {  }
  ngOnInit(): void {
    this.productos = this.menusService.obtenerLista() //al cargar el componente obtnego la lista de los platos seleccionado del servicio
  }

  //Al pulsar "anular pedido" llama a la funcio que limpia el array de platos del servicio y tambien limpio el array del componente
  limpiarLista(){
    this.menusService.limpiarLista();
    this.productos = [];
  }

}
