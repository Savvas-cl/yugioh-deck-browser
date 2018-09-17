import { Component } from '@angular/core';

import { Card } from './card.model';
import { CardService } from './card.service';

@Component({
  selector: 'yugioh-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {	
  title = 'Yu Gi Oh! deck browser';
  private _opened: boolean = true;


  cardNames: string[]; //Holds the names of the cards
  deck: Card[]; //Holds all the information for each card of the deck  
  currentCard: Card; // The current selected Card   

  constructor(private cardService: CardService) {
  	this.deck = []; //Initialize the deck  

  	//the cardNames that we want (given by the assignment)
  	this.cardNames = [
  	  'Burial from a Different Dimension',
	  'Charge of the Light Brigade',
	  'Infernoid Antra',
	  'Infernoid Attondel',
	  'Infernoid Decatron',
	  'Infernoid Devyaty',
	  'Infernoid Harmadik',
	  'Infernoid Onuncu',
	  'Infernoid Patrulea',
	  'Infernoid Pirmais',
	  'Infernoid Seitsemas',
	  'Lyla, Lightsworn Sorceress',
	  'Monster Gate',
	  'One for One',
	  'Raiden, Hand of the Lightsworn',
	  'Reasoning',
	  'Time-Space Trap Hole',
	  'Torrential Tribute',
	  'Upstart Goblin',
	  'Void Seer'
  	];

  	this.createDeck(this.cardNames, this.deck);  

  }

  //Create the deck with all the card details by calling the api for each card name
  createDeck(cardNames: string[], deck: Card[]) {
  	for(let cardName of cardNames) {
      this.cardService.getCardDetailsByName(cardName).subscribe((data: any) => {
  	  	deck.push(new Card(data.data)); 	  	  	
  	  });  	
    }
  }
   
  clickedCard(card: Card) {
  	this.currentCard = card;  
  }
}
