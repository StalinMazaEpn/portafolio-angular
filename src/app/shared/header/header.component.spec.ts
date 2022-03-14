import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { SearchComponent } from 'src/app/pages/search/search.component';

describe('HeaderComponent Test', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SearchComponent
      ],
      imports: [
        HttpClientModule,
        RouterModule.forRoot([
          { path: 'search/:termino', component: SearchComponent },
        ]),
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not redirect to search page due to empty search term', () => {
    component.buscarProducto('');
    console.warn('router.url 1', router.url)
    expect(router.url !== '/search').toBeTrue();
  });

  it('should redirect to search page due to real search term', async () => {
    const responseSearch = await component.buscarProducto('maquinaria');
    console.warn('router.url 2', router.url, responseSearch)
    expect(router.url === '/search/maquinaria').toBeTrue();
  });

});
