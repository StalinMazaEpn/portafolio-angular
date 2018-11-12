import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];

  constructor(private http: HttpClient) {
      this.cargarProductos();
   }

   private cargarProductos(){
     this.http.get('https://datosstalin.firebaseio.com/productos_idx.json').subscribe(
       (respuesta: Producto[]) => {
        
        // console.log(respuesta);
        this.productos = respuesta;
        this.cargando = false;
        //en caso de probar el lazy loader
        // setTimeout(()=>{
        //   this.cargando = false;
        // }, 2000);


       }
     );
   }
}
