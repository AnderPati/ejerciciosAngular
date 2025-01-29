import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioRescountriesService {
datos: any[] = [];

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const url = "https://restcountries.com/v3.1/all?fields=name,capital,region,subregion,population,altSpellings";
    return this.http.get(url);
  }
}
