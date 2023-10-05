import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import Cotizacion from '../DTO/cotizacionDTO'


@Injectable({
  providedIn: 'root'
})
export class BBDDService {

  API_URI = 'http://localhost:8080/ges';
  constructor(private http:HttpClient   
     ) { }


  getHelloS(){   
    return this.http.get(`${this.API_URI}/hello`);
  }

  getProduct(){   
    return this.http.get(`${this.API_URI}/getPro`);
  }

  getCotizacion(telefono:number){   
    return this.http.get(`${this.API_URI}/getT/${telefono}`);
  }


  postCotizacion(cotizacion:Cotizacion){   
    return this.http.post(`${this.API_URI}/creac`,cotizacion);
  }


  deleteCotizacion(id:number){   
    return this.http.delete(`${this.API_URI}/deleteId/${id}`);
  }
}
