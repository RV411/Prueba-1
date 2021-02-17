import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {
  info:InfoPagina={};
  cargada=false;
  equipo:any[]=[];

  constructor(private http: HttpClient){
    this.cargaInfo();
    this.cargarEquipo();
  }

  private cargaInfo(){
    //console.log('Servicio de infoPagina listo');
    //leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      //.subscribe((resp:any)=>{
        //console.log(resp.twitter);
        // .subscribe(resp=>{
        // console.log(resp['twitter']);
    .subscribe((resp:InfoPagina)=>{
      this.cargada=true;
      this.info=resp;  
    });
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-bf671-default-rtdb.firebaseio.com/equipo.json')
    .subscribe((resp:any) => {
      this.equipo=resp;
    });
  }
}
