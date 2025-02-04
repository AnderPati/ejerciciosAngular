import { MenusService } from 'src/app/services/menus.service';
import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],

})

export class ProductosComponent {

  //Variables globales
  rutaActual: string = '';
  productos: Product[] = [];
  productosFiltrados: Product[] = [];
  tipoMenuSeleccionado: string= '';

  constructor(
    private route: ActivatedRoute,
    private menusService: MenusService
  ) {  }

  ngOnInit() {
    this.route.url.subscribe(urlSegment => {
      this.rutaActual = urlSegment[0].path; // Obtiene la ultima parte de la URL
    });

    this.productos = this.menusService.obtenerProduct(); //Cargo en el array del componente el json obtenido el en servicio
  }

  //Al seleccional algo en el select se obtiene un valor y se filtran los productos por ese valor
  //El select tiene un (change) para llamar a esta funcion cada vez que cambia la seleccion
  seleccionarTipoMenu(event: any) {
    this.tipoMenuSeleccionado = event.target.value //se obitene el valor del select

    this.productosFiltrados = []; //Se limpia el array de productos filtrados cada vez que se cambia el select
    for (let producto of this.productos) {
      if (this.tipoMenuSeleccionado == 'basico') { //Si el producto es basico se añade al array que mostrara los platos
        if (producto.basico) {
          this.productosFiltrados.push(producto);
        }
      }else if (this.tipoMenuSeleccionado == 'especial') {//Si el producto es especial se añade al array que mostrara los platos
        if (producto.especial) {
          this.productosFiltrados.push(producto);
        }
      }
    }
  }

  //Cuando le damos 'añadir a la lista' nos manda el producto a esta funcion
  //y esta mandara el producto al servicio para que lo guarde en un array
  agregar(producto: Product){
    this.menusService.agregar(producto);
  }
}

