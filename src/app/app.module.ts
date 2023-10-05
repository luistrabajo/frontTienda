import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CotizacionInitComponent } from './cotizacion-init/cotizacion-init.component';
import { BuscarCotizacionesComponent } from './buscar-cotizaciones/buscar-cotizaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    CotizacionInitComponent,
    BuscarCotizacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
