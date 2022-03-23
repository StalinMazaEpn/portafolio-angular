import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from 'src/app/interfaces/info-pagina.interface';
import { Equipo } from 'src/app/interfaces/equipo.interface';
import { Observable } from 'rxjs';

@Injectable({
  //evita que no ponga el servicio en el imports
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina | null = null;
  cargada = false;
  equipo: Equipo[] = [];

  constructor(
    private http: HttpClient
  ) {
  }

  public cargarInfo(): void {
    //leer json
    this.getDataPagina().subscribe({
      next: (respuesta: InfoPagina) => {
        this.cargada = true;
        this.info = respuesta;
      }
    });
  }

  public cargarEquipo(): void {
    //leer json
    /* istanbul ignore next */
    this.getDataEquipo().subscribe({
      next: (respuesta: Equipo[]) => {
        this.equipo = respuesta;
      }
    });
  }

  private getDataPagina(): Observable<InfoPagina> {
    return this.http.get<InfoPagina>('assets/data/data-pagina.json');
  }

  private getDataEquipo(): Observable<Equipo[]> {
    return this.http.get<Equipo[]>('https://datosstalin.firebaseio.com/equipo.json');
  }


}
