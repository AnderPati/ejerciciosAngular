import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../services/cliente.service';


@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.scss'],
  providers:[ClienteService]
})
export class DetalleClienteComponent {
  @Input () persona:Cliente = new Cliente(0, '','',0,0);
  @Input () posicion:number = 0;
  @Output () editar = new EventEmitter();

  cliente:Cliente = new Cliente(0, '','',0,0);
  
  public clientes: Array<Cliente>;
  constructor(private _clienteService: ClienteService){
    this.clientes=[];
  }
  modificarCliente(){
    this.cliente = this.persona;
    this.editar.emit(this.cliente);

    this.clientes = this._clienteService.getCliente();
    this.clientes[this.posicion] = this.cliente;
  }
}
