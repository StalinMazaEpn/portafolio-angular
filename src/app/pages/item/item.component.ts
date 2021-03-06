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
  producto: ProductoDescripcion;
  productoID: string;

  constructor(private route: ActivatedRoute,
              public productoService: ProductosService) { }

  ngOnInit() {

    this.route.params.subscribe(
        parametros =>{
          // console.log(parametros['id']);
          this.productoService.obtenerProducto(parametros['id']).subscribe(
            (producto: ProductoDescripcion) => {
              // console.log(producto);
              this.cargandoProDesc = false;
              this.producto = producto;
              this.productoID = parametros['id'];
              // setTimeout(()=>{
              //    this.cargandoProDesc = false;
              // }, 2000);
            }
          );
        }
    );

  }

}
