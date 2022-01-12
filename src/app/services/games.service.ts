import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Games } from '../models/games';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  // Variável criada para armazenar o endereço da API
  url = "http://localhost:3000/games"

  // Insere a dependência HttpClient
  constructor(private httpClient: HttpClient) { }

  // Variável que armazena as configurações dos headers da requisição
  httpOptions = {
    headers: new HttpHeaders ({ 'Context-Type': 'application/json'})
  }

  // Método GET, que vai trazer os dados requisitados da API
  getGames( ): Observable<Games[]> {
    return this.httpClient.get<Games[]>(this.url)
  }

}


// user = {
//   email: xxxx,
//   password: xxxxx,
// }

// postUser(user: User): Observable<User[]> {
//   return this.httpClient.post<User[]>(this.url, JSON.stringify(user), this.httpOptions)
// }

// +


// salvarUser() {
//   this.userService.postUser(this.userForm).subscribe( () => {
//     this.carregarUser();
//   })
// }