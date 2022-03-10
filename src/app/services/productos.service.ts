import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargandoProd = true;

  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor(private http: HttpClient) {
      this.cargarProductos();
   }

   private cargarProductos(): Promise<void>{

     //trabajando con promesas

    return new Promise((resolve, reject) =>{

      this.http.get('https://datosstalin.firebaseio.com/productos_idx.json').subscribe(
        (respuesta: Producto[]) => {

         this.productos = respuesta;
         this.cargandoProd = false;
         resolve();
         //en caso de probar el lazy loader
         // setTimeout(()=>{
         //   this.cargando = false;
         // }, 2000);

        });

     });



   }

   obtenerProducto(id: string){
      return this.http.get(`https://datosstalin.firebaseio.com/productos/${id}.json`);
   }

   buscarProducto(termino:string){

    if(this.productos.length === 0){
      //cargar productos
      this.cargarProductos().then(() =>{
          //ejecutar despues de tener los productos
          //aplicar el filtro
          this.filtrarProductos(termino);
      });
    } else {
      //aplicar filtro
      this.filtrarProductos(termino);
    }

  }


  private filtrarProductos(termino:string){

    this.productosFiltrado = [];
    termino = termino.toLocaleLowerCase();

    this.productos.forEach(producto => {

      const tituloLower = producto.titulo.toLocaleLowerCase();
      const categoriaLower = producto.categoria.toLocaleLowerCase();

      if(categoriaLower.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0){
        this.productosFiltrado.push(producto);
      }

    });

    console.log(this.productosFiltrado);


  }

}
