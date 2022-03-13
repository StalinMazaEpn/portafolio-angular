import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from 'src/app/interfaces/info-pagina.interface';
import { Equipo } from 'src/app/interfaces/equipo.interface';

@Injectable({
  //evita que no ponga el servicio en el imports
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: Equipo[] = [];

  constructor(
    private http: HttpClient
  ) {
  }

  public cargarInfo(): void {
    //leer json
    this.http.get<InfoPagina>('assets/data/data-pagina.json').subscribe({
      next: (respuesta: InfoPagina) => {
        this.cargada = true;
        this.info = respuesta;
      }
    });
  }

  private cargarEquipo(): void {
    //leer json
    this.http.get<Equipo[]>('https://datosstalin.firebaseio.com/equipo.json').subscribe({
      next: (respuesta: Equipo[]) => {
        this.equipo = respuesta;
      }
    });
  }


}
