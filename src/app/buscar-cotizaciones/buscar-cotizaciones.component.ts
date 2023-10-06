import { Component } from '@angular/core';

import {BBDDService} from '../service/bbdd.service'
import Cotizacion from '../DTO/cotizacionDTO'
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-buscar-cotizaciones',
  templateUrl: './buscar-cotizaciones.component.html',
  styleUrls: ['./buscar-cotizaciones.component.css']
})
export class BuscarCotizacionesComponent {

  constructor( private service: BBDDService){    
 }


  buscarCotizaciones(){
      this.service.getCotizacion(this.numeroTelefono).subscribe({
        next:(response:any) => {        
          this.cotizaciones = response;
          console.log(response)
          this. formatCotizaciones();
        },
        error: (error:any) => {
          console.log(error)
        }
    })
  }

  formatCotizaciones(){
      this.cotizaciones.forEach((cotizacion) => {
        cotizacion.fecha_creacion =this.changeFormat(cotizacion.fecha_creacion)
        this.cotizacionesF.push(cotizacion);
      });
    
  }

  changeFormat(fecha:string){   
    let pipe = new DatePipe('en-CO');    
    return  pipe.transform(fecha, 'YYYY-MM-dd');
  }

  borrar(){
    this.numeroTelefono='';
    this.cotizacionesF=[]
  }

  cancelar(){
    this.id=null;
  }

  eliminarCotizacion(){  
    this.service.deleteCotizacion(this.id).subscribe({
      next:(response:any) => {
        console.log(response); 
      },
      error: (error:any) => {
        console.log(error)
      }
  })
  }

 eliminarCotizaciones(){
      this.cotizacionesF=[];
      this.cotizaciones=[];
      this.eliminarCotizacion();
      setTimeout(() => {
        this.buscarCotizaciones();
      }, 500);
      
 

}



numeroTelefono:any;
cotizaciones:Cotizacion[]=[];
cotizacionesF:Cotizacion[]=[];
id:any;

}
