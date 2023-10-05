import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {CotizacionInitComponent} from './cotizacion-init/cotizacion-init.component';
import {BuscarCotizacionesComponent} from './buscar-cotizaciones/buscar-cotizaciones.component';

const routes: Routes = [

{
  path:'',
  redirectTo:'buscarCotizacion',
  pathMatch: 'full'
},
{
  path:'CrearCotizacion',
  component: CotizacionInitComponent
},
{
  path:'buscarCotizacion',
  component: BuscarCotizacionesComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
