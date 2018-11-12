import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  yearFooter: number = new Date().getFullYear();

  constructor(public _servicioInfoPage: InfoPaginaService) { }

  ngOnInit() {
  }

}
