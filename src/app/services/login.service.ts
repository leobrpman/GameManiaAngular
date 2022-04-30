import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Variável criada para armazenar o endereço da API; senha criptografada = "batatagratinada"
   url = "http://localhost:3000/login"

   // Insere a dependência HttpClient
   constructor(private httpClient: HttpClient) { }
 
 
   // Método POST para o Login, que vai validar os dados enviados para a API
   
   login(user: Login): Observable<any> {
     return this.httpClient.post(this.url, JSON.stringify(user), {
      // Variável que armazena as configurações dos headers da requisição
      headers: new HttpHeaders ({ 'Content-Type': 'application/json' }),
      observe: 'response'
      })
    }
}
