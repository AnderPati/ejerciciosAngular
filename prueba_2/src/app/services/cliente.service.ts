import { Injectable } from '@angular/core';
import {Cliente} from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  public clientes:Array<Cliente>;
  constructor() {
    this.clientes = [
      new Cliente(1, 'Ane', 'Ansola', 18, 1230),
      new Cliente(2, 'Carlos', 'Gómez', 25, 1500),
      new Cliente(3, 'Lucía', 'Martínez', 30, 2450),
      new Cliente(4, 'Pedro', 'Hernández', 45, 3200),
      new Cliente(5, 'Ana', 'López', 22, 1100),
      new Cliente(6, 'Diego', 'Sánchez', 35, 2890),
      new Cliente(7, 'María', 'Rodríguez', 28, 1650),
      new Cliente(8, 'Javier', 'Pérez', 40, 3300)
    ]
  }
  getCliente(): Array<Cliente>{
    return this.clientes;
  }
}
