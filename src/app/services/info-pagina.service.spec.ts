import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { InfoPaginaService } from './info-pagina.service';
import { InfoPagina } from 'src/app/interfaces/info-pagina.interface';
import { Equipo } from 'src/app/interfaces/equipo.interface';

describe('InfoPaginaService Test', () => {

  let service: InfoPaginaService;
  let httpClienteSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    httpClienteSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new InfoPaginaService(httpClienteSpy as any);

    httpClienteSpy.get.and.returnValue(of({
      titulo: 'Stalin Maza',
      email: 'stalinct97@gmail.com',
      nombre_corto: 'Stalin',
      pagina_autor: 'https://stalinct97.gitlab.io/stalin-landing-page/',
      facebook: 'https://www.facebook.com/stalinmaza97',
      twitter: 'https://www.twitter.com/stalinct97',
      instagram: 'https://instagram.com/stalinmaza97',
      equipo_trabajo: []
    }));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return infoPage', (done: DoneFn) => {
    const mockupInfoPagina: InfoPagina = {
      email: 'juanito@gmail.com',
      equipo_trabajo: [],
      facebook: 'https://facebook.com/juanito27',
      instagram: 'https://instagram.com/juanito27',
      pagina_autor: 'www.juanito.com',
      nombre_corto: 'Juanito Rodriguez',
      titulo: 'PortafolioJuanito',
      twitter: 'https://twitter.com/juanito271'
    };

    httpClienteSpy.get.and.returnValue(of(mockupInfoPagina));
    service['getDataPagina']().subscribe({
      next: (res: InfoPagina) => {
        expect(Object.keys(res)).toEqual(Object.keys(mockupInfoPagina));
        done();
      }
    });
  });

  it('should return equipoData', (done: DoneFn) => {
    const mockupInfoPagina: Equipo[] = [{
      frase: 'A romper las fronteras del aburrimiento',
      nombre: 'Mauricio Velázquez',
      imagen: 'https://i.pravatar.cc/300?img=67',
      subtitulo: 'Fotográfo profesional',
      twitter: 'https://twitter.com/mauricio877'
    }];
    httpClienteSpy.get.and.returnValue(of(mockupInfoPagina));
    service['getDataEquipo']().subscribe({
      next: (res: Equipo[]) => {
        expect(Object.keys(res[0])).toEqual(Object.keys(mockupInfoPagina[0]));
        done();
      }
    });
  });
});
