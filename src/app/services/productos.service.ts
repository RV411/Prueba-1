import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando=true;
  productos:any[]=[];

  constructor(private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos(){
    this.http.get('https://angular-html-bf671-default-rtdb.firebaseio.com/productos_idx.json')
      .subscribe((resp:any)=>{
        this.productos=resp;
        this.cargando=false;
        // Para ver si funciona el cargando
        // setTimeout(()=>{
        //   this.cargando=false;
        // },2000);
      });
  }

  getProducto (id:string){
    return this.http.get(`https://angular-html-bf671-default-rtdb.firebaseio.com/productos/${ id }.json`)
  }
}

