import { NgModule, Component } from '@angular/core';
//RouterModule dice cuales son las rutas principales o fisicas 
import { Routes,RouterModule } from "@angular/router";
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './shared/search/search.component';

// como quieres que trabajen las rutas
const app_routes: Routes = [
    { path:'home',component:PortafolioComponent },
    { path:'about',component:AboutComponent},
    { path:'item/:id',component:ItemComponent},
    { path:'search/:termino',component:SearchComponent},
    { path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
    imports:[
        // {useHash:true} ayuda a que identifique rutas en el navegador
        // como redirect en django
        // Si usamos el HtAxes ya no se ocupa
        RouterModule.forRoot( app_routes,{useHash:true} )
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{ }