import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { InfoPaginaService } from './info-pagina.service';

describe('InfoPaginaService Test', () => {

  let service: InfoPaginaService;
  let httpClienteSpy: { get: jasmine.Spy }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    httpClienteSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new InfoPaginaService(httpClienteSpy as any);

    httpClienteSpy.get.and.returnValue(of({
      "titulo": "Stalin Maza",
      "email": "stalinct97@gmail.com",
      "nombre_corto": "Stalin",
      "pagina_autor": "https://stalinct97.gitlab.io/stalin-landing-page/",
      "facebook": "https://www.facebook.com/stalinmaza97",
      "twitter": "https://www.twitter.com/stalinct97",
      "instagram": "https://instagram.com/stalinmaza97",
      "equipo_trabajo": []
    }));
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
})
