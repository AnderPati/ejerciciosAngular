import { Component, OnInit } from '@angular/core';
import { ServicioRescountriesService } from './services/servicio-rescountries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public datos: any;

  constructor(public _servicioRescountriesService: ServicioRescountriesService){}

  ngOnInit():void {
    this._servicioRescountriesService.getData().subscribe(
      data =>{
        this.datos = data;
      })
  }

  title = 'pruebaApi';
}
