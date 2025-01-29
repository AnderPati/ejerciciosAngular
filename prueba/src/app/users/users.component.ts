import { Component, EventEmitter, Input, Output } from '@angular/core';
import { usuario } from '../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  @Input() usuarioData!: usuario;
  @Output() eliminar = new EventEmitter<void>();
  @Output() editar = new EventEmitter<void>();

  editarUsuario(){
    this.editar.emit();
  }

  eliminarUsuario(){
    this.eliminar.emit();
  }

}
