import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  url='http://localhost/articulosApi/controllers/';
  
  constructor(private http: HttpClient) { }

  public recuperarTodos() {
    return new Promise(
      resolve => {
        this.http.get (this.url + 'recuperarTodos.php')
        .subscribe(
          data => resolve(data)
        )
      }
    )
  }

}
export class Articulo{
  constructor(
  public id: number,
  public nombre: string,
  public descripcion: string,
  public precio: number,
  public imagen: string
  ){}
}