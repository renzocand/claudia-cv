import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {



  constructor(private http:HttpClient) {
   }

   mandarCorreo(body:Usuario){
     return this.http.post("https://renzocand-crud.tk/claudia/rest", body)
   }
}
