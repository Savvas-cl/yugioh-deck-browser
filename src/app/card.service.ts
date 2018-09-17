import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  API_URL = 'http://52.57.88.137/api/card_data/';

  constructor(private http: HttpClient) { }

  getCardDetailsByName(cardName: string) {
  	return this.http.get(`${this.API_URL}${cardName}`);
  }
}
