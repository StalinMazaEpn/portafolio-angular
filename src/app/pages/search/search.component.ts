import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  parametros: any = {}
  constructor(
    private route: ActivatedRoute,
    public productosService: ProductosService
  ) {
    this.productosService.cargarProductos();
  }

  async ngOnInit() {
    const params = await firstValueFrom(this.route.params);
    console.warn('params', params)
    this.parametros = params;
    console.log('parametros', this.parametros)
    await this.buscarProducto(this.parametros['termino']);
  }

  public async buscarProducto(term: string) {
    return await this.productosService.buscarProducto(term);
  }
}
