import { Component } from '@angular/core';
import { usuario } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    usuariosArray = Array(
      new usuario("Juan", "Pérez", "12345678A", "2024-12-01", "2024-12-05", "101"),
      new usuario("María", "Gómez", "87654321B", "2024-12-02", "2024-12-06", "102"),
      new usuario("Carlos", "López", "11223344C", "2024-12-03", "2024-12-07", "103"),
      new usuario("Ana", "Martínez", "22334455D", "2024-12-04", "2024-12-08", "104")
    )
    dataEdit: any = {
      nombre: '',
      apellido: '',
      dni: '',
      checkin: '',
      checkout: '',
      roomnumber: ''
    };

    mostrar:boolean = false;
    editando:boolean = false;
    editandoIndex:number = 0;

    verFormulario(e:Event){
      this.editando = false;
      this.mostrar = !this.mostrar;
      const button = e.target as HTMLButtonElement;
      button.innerText = this.mostrar ? "Ver usuarios" : "Añadir nuevo usuario";
      this.dataEdit = {nombre: '', apellido: '', dni: '', checkin: '', checkout: '', roomnumber: ''};
    }

    aniadirUsuario(nombre:string,apellido:string, dni:string, checkin:string, checkout:string, room:string){
      const user = new usuario(nombre, apellido, dni, checkin, checkout, room);
      this.usuariosArray.push(user);
      document.getElementById("aniadirVer")?.click();
    }


    editarVista(index: number) {
      this.editandoIndex = index
      document.getElementById("aniadirVer")?.click();
      this.editando = true;

      this.dataEdit = {
        nombre: this.usuariosArray[index].nombre || '',
        apellido: this.usuariosArray[index].apellido || '',
        dni: this.usuariosArray[index].dni || '',
        checkin: this.usuariosArray[index].checkin || '',
        checkout: this.usuariosArray[index].checkout || '',
        roomnumber: this.usuariosArray[index].roomnumber || ''
      };
    }

    editarUsuario(nombre:string,apellido:string, dni:string, checkin:string, checkout:string, room:string){
      const user = new usuario(nombre, apellido, dni, checkin, checkout, room);
      this.usuariosArray[this.editandoIndex] = user;
      document.getElementById("aniadirVer")?.click();
    }

    eliminarUsuario(index: number) {
      this.usuariosArray.splice(index, 1); // Elimina el usuario del array
    }

}
