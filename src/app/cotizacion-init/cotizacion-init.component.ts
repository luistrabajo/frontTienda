import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

import ProCotDTO from '../DTO/productoCotizacionDTO'



@Component({
  selector: 'app-cotizacion-init',
  templateUrl: './cotizacion-init.component.html',
  styleUrls: ['./cotizacion-init.component.css']
})
export class CotizacionInitComponent {



capturar() {
  this.nombre = this.opcionSeleccionada;
}

introducir(){
  
  this.index = this.listaProductos.find((element) => element.nombre == this.nombre)

  let precio:string =JSON.stringify(this.index.precio)
  let nombre:string =JSON.stringify(this.index.nombre)
  let codigo:string = JSON.stringify(this.index.codigo)

  this.proCotDTO.codigo =codigo.replace(/["']/g, "");
  this.proCotDTO.nombre =nombre.replace(/["']/g, "");
  
  this.proCotDTO.precio = parseInt(precio);
  this.proCotDTO.unidades = this.unidades;
  this.proCotDTO.valorProUni = this.proCotDTO.precio * this.unidades;

  
  this.total = this.total + this.proCotDTO.valorProUni; 
  this.listaProductosC.push(this.proCotDTO);
  
  this.borrar()
  this.unidades=1;

}


borrar(){
  this.proCotDTO = {
    codigo:'',
    nombre: '0',
    precio: 0,
    unidades: 0,
    valorProUni : 0
  }
}

eliminar(pro: any){  
  this.listaProductosC.splice(pro.name,1);
  this.total=0;  
  this.listaProductosC.forEach(element => {
    if(element.valorProUni){
      this.total = this.total + element.valorProUni;
    }    
  })
  }

posicion:number=0;
index:any;
nombre:string='';
unidades:number =1;
precio:number=0;
total:number=0;

opcionSeleccionada:any;



  proCotDTO: ProCotDTO  = {
    codigo:'',
    nombre: '0',
    precio: 0,
    unidades: 0,
    valorProUni : 0    
  }
   


  listaProductosC : ProCotDTO[] = [];  


   listaProductos : ProCotDTO[] = [
    {
     codigo:'001',
     nombre: 'CocaCola',
     precio: 1000,
     unidades: 2,
     valorProUni : 0
   },
    
   {
     codigo:'002',
     nombre: 'Pepsi',
     precio: 1000,
     unidades: 2,
     valorProUni : 0
   },
   {
     codigo:'003',
     nombre: 'Bigcola',
     precio: 1000,
     unidades: 2,
     valorProUni : 0
   },
   {
     codigo:'004',
     nombre: 'SevenUP',
     precio: 1000,
     unidades: 2,
     valorProUni : 0
   }
 ]
 

}
