import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(public infoService: InfoPaginaService) {
    this.cargarEquipo();
  }


  cargarEquipo(): void {
    this.infoService.cargarEquipo();
  }

}
