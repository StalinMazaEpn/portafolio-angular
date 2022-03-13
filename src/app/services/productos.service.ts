import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from 'src/app/interfaces/producto.interface';
import { Observable } from 'rxjs';
import { ProductoDescripcion } from '../interfaces/producto-descripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargandoProd = true;

  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor(private http: HttpClient) {
  }

  cargarProductos(): Promise<void> {

    //trabajando con promesas
    return new Promise((resolve) => {
      this.http.get<Producto[]>('https://datosstalin.firebaseio.com/productos_idx.json').subscribe({
        next: (respuesta: Producto[]) => {
          this.productos = respuesta;
          this.cargandoProd = false;
          resolve();
        }
      });
    });
  }

  obtenerProducto(id: string) {
    return this.http.get<ProductoDescripcion>(`https://datosstalin.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(termino: string) {

    if (this.productos.length === 0) {
      //cargar productos
      this.cargarProductos().then(() => {
        //ejecutar despues de tener los productos
        //aplicar el filtro
        this.filtrarProductos(termino);
      });
    } else {
      //aplicar filtro
      this.filtrarProductos(termino);
    }

  }


  private filtrarProductos(termino: string) {

    this.productosFiltrado = [];
    termino = termino.toLocaleLowerCase();

    this.productos.forEach(producto => {

      const tituloLower = producto.titulo.toLocaleLowerCase();
      const categoriaLower = producto.categoria.toLocaleLowerCase();

      if (categoriaLower.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
        this.productosFiltrado.push(producto);
      }

    });

  }

}
