import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
// para la navegacion de usa 
// router
  constructor(public _servicio:InfoPaginaService,
              public route:Router) { }

  ngOnInit(): void {
  }

  buscarProducto(terminos:string){

  }
}
