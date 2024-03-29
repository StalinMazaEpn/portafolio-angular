import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public _servicioInfoPage: InfoPaginaService,
    private router: Router) {
    this._servicioInfoPage.cargarInfo();
  }

  ngOnInit() {
  }

  async buscarProducto(termino: string): Promise<boolean> {
    if (termino.length >= 1) {
      return this.router.navigate(['search', termino]);
    }
    return new Promise((resolve)=>resolve(false));
  }

}
