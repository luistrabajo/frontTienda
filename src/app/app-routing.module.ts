import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {CotizacionInitComponent} from './cotizacion-init/cotizacion-init.component'


const routes: Routes = [

{
  path:'',
  redirectTo:'cotizacion',
  pathMatch: 'full'
},
{
  path:'cotizacion',
  component: CotizacionInitComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
