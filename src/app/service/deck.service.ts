import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DeckService {

  //Connexion au serv
  uri = 'http://localhost:4201';

  constructor(private http: HttpClient) { }

  //Services

  getDecks()  {
    return this.http.get(`${this.uri}/decks`);
  }
}
