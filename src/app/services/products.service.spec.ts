import { HttpClientModule } from '@angular/common/http';
import { ProductosService } from './productos.service';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';

describe('ProductosService Test', () => {

  let service: ProductosService;
  let httpClienteSpy: { get: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
      ],
    });
    httpClienteSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new ProductosService(httpClienteSpy as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load products data and hide loader', async () => {
    const mockupInfoPagina: Producto[] = [{
      "categoria": 'Hogar',
      "cod": "HG-5144",
      "titulo": "Cafetera Profesional Oster",
      "url": "https://picsum.photos/200"
    }];
    httpClienteSpy.get.and.returnValue(of(mockupInfoPagina))
    await service['cargarProductos']();

    expect(service.cargandoProd).toBeFalsy();
    expect(service.productos.length > 0).toBeTrue();
  });

  it('should filter products when there are no data', async () => {
    const mockupInfoPagina: Producto[] = [{
      "categoria": 'Hogar',
      "cod": "HG-5144",
      "titulo": "Cafetera Profesional Oster",
      "url": "https://picsum.photos/200"
    }];
    httpClienteSpy.get.and.returnValue(of(mockupInfoPagina))
    await service['buscarProducto']('cafetera');
    expect(service.productosFiltrado.length > 0).toBeTrue();
  });

  it('should filter products when there are previous data', async () => {
    const mockupProductoList: Producto[] = [{
      "categoria": 'Tecnología',
      "cod": "HG-5144",
      "titulo": "SmartTV Inteligente Sony",
      "url": "https://picsum.photos/200"
    }];
    service.productos = mockupProductoList;
    await service['buscarProducto']('SmartTV');

    expect(service.productosFiltrado.length > 0).toBeTrue();
  });

  it('should return Producto by its ID', (done: DoneFn) => {
    const mockupProducto: ProductoDescripcion = {
      "categoria": 'Tecnología',
      "desc1": "SmartTV Inteligente Sony",
      "desc2": "SmartTV HHG-14 Sony",
      "producto": "Sony HHG-1",
      "resumen": "Lorme ipsum",
      "subtitulo1": "Lorme ipsum 1",
      "subtitulo2": "Lorme ipsum 2"
    }

    httpClienteSpy.get.and.returnValue(of(mockupProducto))
    service['obtenerProducto']("jam7hs653g").subscribe({
      next: (res: ProductoDescripcion) => {
        expect(Object.keys(res)).toEqual(Object.keys(mockupProducto))
        done();
      }
    });
  });

})
