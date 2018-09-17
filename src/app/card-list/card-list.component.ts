import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { Card } from '../card.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  
  @Input() cardsDeck: Card[];

  @Output() clickEvent: EventEmitter<Card>;

  constructor() { 
  	this.clickEvent = new EventEmitter();
  } 

  ngOnInit() {
  }

  showCardDetails(cardName) {  
  	this.clickEvent.emit(cardName);
  	
  }

}
