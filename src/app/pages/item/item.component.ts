import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  cargandoProDesc = true;
  producto!: ProductoDescripcion;
  productoID = '';

  constructor(private route: ActivatedRoute,
    public productosService: ProductosService) {
      this.productosService.cargarProductos();
     }

  ngOnInit() {

    this.route.params.subscribe(
      parametros => {
        this.productosService.obtenerProducto(parametros['id']).subscribe(
          (producto: ProductoDescripcion) => {
            this.cargandoProDesc = false;
            this.producto = producto;
            this.productoID = parametros['id'];
          }
        );
      }
    );

  }

}
