import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { SearchComponent } from 'src/app/pages/search/search.component';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Equipo } from 'src/app/interfaces/equipo.interface';
import { of } from 'rxjs';


describe('AboutComponent Test', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;
  let httpClienteSpy: { get: jasmine.Spy };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forRoot([
          { path: 'about', component: AboutComponent },
          { path: 'search/:termino', component: SearchComponent },
        ]),
      ],
      declarations: [
        SearchComponent,
        AboutComponent
      ],
      providers: [InfoPaginaService]
    })
      .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    httpClienteSpy = jasmine.createSpyObj('HttpClient', ['get']);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadEquipoFN', async () => {
    const mockupInfoPagina: Equipo[] = [{
      'frase': 'A romper las fronteras del aburrimiento',
      'nombre': 'Mauricio Velázquez',
      'imagen': 'https://i.pravatar.cc/300?img=67',
      'subtitulo': 'Fotográfo profesional',
      'twitter': 'https://twitter.com/mauricio877'
    }];
    httpClienteSpy.get.and.returnValue(of(mockupInfoPagina));
    const serviceMock = new InfoPaginaService(httpClienteSpy as any);
    spyOn(serviceMock, 'cargarEquipo');
    new AboutComponent(serviceMock);
    expect(serviceMock.cargarEquipo).toHaveBeenCalled();
    expect(Array.isArray(serviceMock.equipo)).toBeTruthy();
  });

});
