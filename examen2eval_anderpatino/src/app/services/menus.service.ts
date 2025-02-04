import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import datosPlatos from '../../assets/json/datosPlatos.json';


@Injectable({
  providedIn: 'root'
})
export class MenusService {

  productos: Product[] = datosPlatos; //Array donde se guardan los datos del json
  listaPedidos: any[] = []; //Array donde guardare los productos seleccionados en platos

  constructor() {  }

  //Devuelve el array de productos
  obtenerProduct() {
    return this.productos;
  }

  //Agrefa el producto que se manda como parametro al array de listaPedidos
  agregar(producto: any){
    this.listaPedidos.push(producto);
  }

  //Devuelve el array de listaPedidos
  obtenerLista() {
    return this.listaPedidos;
  }

  //Limpia el array de listaPedidos
  limpiarLista(){
    this.listaPedidos = [];
  }

}


