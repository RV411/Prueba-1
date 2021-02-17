import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  cargando=true;
  productos:any[]=[];
  productoFiltrado:Producto[]=[];
  

  constructor(private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos(){

    return new Promise((resolve,reject)=>{
      this.http.get('https://angular-html-bf671-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe((resp:any)=>{
          this.productos=resp;
          this.cargando=false;
          resolve();
          // Para ver si funciona el cargando
          // setTimeout(()=>{
          //   this.cargando=false;
          // },2000);
        });
    });
  }

  getProducto (id:string){
    return this.http.get(`https://angular-html-bf671-default-rtdb.firebaseio.com/productos/${ id }.json`)
  }
  // se busca si ya se encuentran cargados todos los datos
  buscarProducto(termino:string){
    if(this.productos.length==0){
      // cargar productos
      this.cargarProductos().then(()=>{
        this.filtrarProductos(termino);
      });
    }else{
      // aplicar filtro
      this.filtrarProductos(termino);
    }    
  }

  private filtrarProductos(termino:string){
    // se purga el arreglo para que no se le añada nada con this
    this.productoFiltrado=[];
    // que no sea sencible con las palabras
    termino= termino.toLocaleLowerCase();
    this.productos.forEach(prod=>{
      // tambien se pone en lower al titulo
      const tituloLower=prod.titulo.toLocaleLowerCase();
      if(prod.categoria.indexOf(termino)>= 0 || tituloLower.indexOf(termino)>= 0){
        this.productoFiltrado.push(prod);
      }
    });
  }
}

