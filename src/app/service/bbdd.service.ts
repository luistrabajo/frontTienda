import { Injectable } from '@angular/core';


import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BBDDService {

  API_URI = 'http://localhost:8080';
  constructor(private http:HttpClient   
     ) { }


  getHelloS(){   
    return this.http.get(`${this.API_URI}/hello`);
  }
}
