import { HttpClientModule } from '@angular/common/http';
import { ProductosService } from './productos.service';
import { TestBed } from '@angular/core/testing';

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
})
