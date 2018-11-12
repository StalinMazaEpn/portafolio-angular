import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  //evita que no ponga el servicio en el imports
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[]

  constructor(private http: HttpClient) { 
      this.cargarInfo();
      this.cargarEquipo();
  }

  private cargarInfo(){
    console.log('Servicio de Info Pagina Cargado');
    //leer json
    this.http.get('assets/data/data-pagina.json').subscribe(
      (respuesta: InfoPagina) => {
        this.cargada = true;
        this.info = respuesta;
        console.log(this.info);
      }
    );
  }

  private cargarEquipo(){
    console.log('Servicio de Carga de Equipo');
    //leer json
    this.http.get('https://datosstalin.firebaseio.com/equipo.json').subscribe(
      (respuesta: any[]) => {
        // this.cargada = true;
        this.equipo = respuesta;
        console.log(this.equipo);
      }
    );
  }


}
