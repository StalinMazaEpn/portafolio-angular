import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router, ActivatedRoute, Params } from '@angular/router';
import { Subject, of } from 'rxjs';
import { SearchComponent } from './search.component';
import { Producto } from 'src/app/interfaces/producto.interface';

describe('HeaderComponent Test', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let router: Router;
  let params: Subject<Params>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
          { path: 'search/:termino', component: SearchComponent },
        ]),
      ],
      declarations: [
        SearchComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    params = new Subject<Params>();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call search product when params are provided', async () => {
    const fakeParam = {termino: '123'};
    const keyPrimary = 'route';
    const keySecondary = 'params';
    component[keyPrimary][keySecondary] = of(fakeParam);

    // await router.navigate(['search', 'maquinaria'])
    spyOn(component, 'buscarProducto');
    await component.ngOnInit();
    console.log('component 2', component);
    console.log('expect called');
    expect(component.buscarProducto).toHaveBeenCalled();
  });

  it('should filter products when there are previous data', async () => {
    const mockupProductoList: Producto[] = [{
      categoria: 'Tecnología',
      cod: 'HG-5144',
      titulo: 'SmartTV Inteligente Sony',
      url: 'https://picsum.photos/200'
    }];
    await component.buscarProducto('termino');
    console.log('componentSearch', component);
    expect(Array.isArray(component.productosService.productosFiltrado)).toBeTrue();
  });


});
