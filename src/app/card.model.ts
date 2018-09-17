
/**
 * a `Card` object
 */
export class Card {

  name: string;
  text: string;
  card_type: string;
  type: any;
  family: any;
  atk: any;
  def: any;
  level: any;
  property: any;

  constructor(cardInfo: Card) {
  	this.name = cardInfo.name;
  	this.text = cardInfo.text;
  	this.card_type = cardInfo.card_type;
  	this.type = cardInfo.type;
  	this.family = cardInfo.family;
  	this.atk = cardInfo.atk;
  	this.def = cardInfo.def;
  	this.level = cardInfo.level;
  	this.property = cardInfo.property;

  }  	  
}