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

  constructor(private http: HttpClient) { 
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
}
