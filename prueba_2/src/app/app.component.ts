import { Component } from '@angular/core';
import { Cliente } from './models/cliente';
import { ClienteService } from './services/cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers:[ClienteService]
})
export class AppComponent {
  public clientes: Array<Cliente>;

  constructor(private _clienteService: ClienteService){
    this.clientes=[];
  }
  ngOnInit(){
    this.clientes = this._clienteService.getCliente();
  }

  persona:Cliente = new Cliente(0,"","",0,0)
  posicion:number = 0;

  sacarDatos(persona:Cliente, posicion:number){
    this.persona = persona;
    this.posicion = posicion;
  }

   modifCliente(event:Cliente){
    this.persona = event;
    alert("Modificacion realizada - "+this.persona.nombre+"-"+this.persona.apellido+"-"+this.persona.edad+"-"+this.persona.cantidad)
   }
}
