import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';


import Item from '../DTO/productoCotizacionDTO'
import ProductDTO from '../DTO/productDTO'
import Cotizacion from '../DTO/cotizacionDTO'

import {BBDDService} from '../service/bbdd.service'

@Component({
  selector: 'app-cotizacion-init',
  templateUrl: './cotizacion-init.component.html',
  styleUrls: ['./cotizacion-init.component.css']
})
export class CotizacionInitComponent {

 constructor( private service: BBDDService){
    this.cargarProductos();
    this.changeFormat();   
 }


 cargarProductos(){     
      if(this.listaProductosS == null)
      {
        this.service.getProduct().subscribe({
          next:(response:any) => {  
            this.listaProductosS = response
            console.log(response)
          
          },
          error: (error:any) => {
            console.log(error)
          }
        });
      }    
  }




capturarProducto() {
  this.product_name = this.opcionSeleccionada;
}


introducirItems(){
      
      this.index = this.listaProductosS.find((element:ProductDTO) => element.product_name == this.product_name)

      let precio:any =JSON.stringify(this.index.product_price)
      let nombre:string =JSON.stringify(this.index.product_name)
      let codigo:string = JSON.stringify(this.index.product_code)

      this.proCotDTO.codigo =codigo.replace(/["']/g, "");
      this.proCotDTO.nombre =nombre.replace(/["']/g, "");
      
      this.proCotDTO.precio = parseInt(precio);
      this.proCotDTO.cantidad = this.unidades;
      this.proCotDTO.valor_pro_uni = this.proCotDTO.precio * this.unidades;

      
      this.total = this.total + this.proCotDTO.valor_pro_uni; 
      this.listaProductosC.push(this.proCotDTO);
      
      this.borrarVariableproCotDTO()
      this.unidades=1;

    }


    borrarVariableproCotDTO(){
      this.proCotDTO = {
        codigo:'',
        nombre: '',
        precio: 0,
        cantidad: 0,
        valor_pro_uni : 0
      }
    }


  borrarCotizacion(){
      this.proCotDTO = {
        codigo:'',
        nombre: '',
        precio: 0,
        cantidad: 0,
        valor_pro_uni : 0
      }

      this.cotizacion = {          
        nombre_cliente: '',
        numero_telefono: 0,
        fecha_creacion: '',
        valor_total: 0, 
        descripcion: []
        }

        this.total=0;
        this.listaProductosC=[]
        this.nombreCliente='';
        this.numeroTelefono='';
        this.opcionSeleccionada=''
        this.borrarVariableproCotDTO()

    }







  eliminarItem(pro: any){  
  this.listaProductosC.splice(pro.name,1);
  this.total=0;  
  this.listaProductosC.forEach(element => {
    if(element.valor_pro_uni){
      this.total = this.total + element.valor_pro_uni;
    }    
    })
    }

  
  changeFormat(){
    this.changedFormat = this.pipe.transform(this.hoy, 'YYYY-MM-dd');
    this.fechaActual = this.changedFormat;   
    }



  crearCotizacion(){    
            this.cotizacion = {          
                  nombre_cliente: this.nombreCliente,
                  numero_telefono: this.numeroTelefono,
                  fecha_creacion: this.fechaActual,
                  valor_total: this.total, 
                  descripcion: this.listaProductosC
                  }
            if(this.cotizacion.nombre_cliente != '' && this.cotizacion.valor_total !=0 ){
                    this.guardarCotizacion(this.cotizacion)                     
                  } 
    }


    mostrarResultado(){   
        this.borrarCotizacion();   
        this.fechaRes = this.changeFormatB(this.cotizacionRe.fecha_creacion)
        this.marcador=true;
        console.log(this.cotizacionRe)        
      while(this.cotizacionRe.fecha_creacion = ''){
        this.mostrarResultado();
      }     
    }




  guardarCotizacion(cotizacion:Cotizacion){
    this.service.postCotizacion(cotizacion).subscribe({
      next:(response:any) => { 
        this.cotizacionRe=response;
        console.log(response)
        this.mostrarResultado();
      },
      error: (error:any) => {
        console.log(error)
      }
      })
    }



    volver(){
        this.marcador =false;
        this.cotizacionRe ={  
          cotizacion_id: 0,
          nombre_cliente: '',
          numero_telefono: 0,
          fecha_creacion: '',
          valor_total: 0, 
          descripcion: []
          }
      }




    changeFormatB(fecha:any){    
      let pipe = new DatePipe('en-CO');
      return pipe.transform(fecha, 'YYYY-MM-dd');
      }




proCotDTO: Item  = {
    codigo:'',
    nombre: '0',
    precio: 0,
    cantidad: 0,
    valor_pro_uni : 0    
    }


cotizacion:Cotizacion ={  
      cotizacion_id: 0,
      nombre_cliente: '',
      numero_telefono: 0,
      fecha_creacion: '',
      valor_total: 0, 
      descripcion: []
      }
     

cotizacionRe:Cotizacion ={  
        cotizacion_id: 0,
        nombre_cliente: '',
        numero_telefono: 0,
        fecha_creacion: '',
        valor_total: 0, 
        descripcion: []
        }


fechaRes:any='';
marcador:boolean=false;
nombreCliente: string='';
numeroTelefono: any;
changedFormat: any;
hoy = new Date();
fechaActual:any = '';
pipe = new DatePipe('en-CO');
posicion:number=0;
index: any;
product_name: string='';
unidades: number =1;
precio: number=0;
total: number=0;
opcionSeleccionada:string='0';  
listaProductosS: any;
listaProductosC: Item[]=[];

}
