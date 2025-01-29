import { Component } from '@angular/core';
import { ServicioRescountriesService } from './services/servicio-rescountries.service';

@Component({
  selector: 'app-prueba-api',
  templateUrl: './prueba-api.component.html',
  styleUrls: ['./prueba-api.component.scss']
})
export class PruebaApiComponent {
  public datos: any;

  constructor(public _servicioRescountriesService: ServicioRescountriesService){}

  ngOnInit():void {
    this._servicioRescountriesService.getData().subscribe(
      data =>{
        this.datos = data;
      })
  }
}
