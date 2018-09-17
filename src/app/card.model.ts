
/**
 * a `Card` object
 */
export class Card {

  name: string;
  text: string;
  cardType: string;
  type: any;
  family: any;
  atk: any;
  def: any;
  level: any;
  cardProperty: any;

  constructor(cardInfo: Card) {
  	this.name = cardInfo.name;
  	this.text = cardInfo.text;
  	this.cardType = cardInfo.cardType;
  	this.type = cardInfo.type;
  	this.family = cardInfo.family;
  	this.atk = cardInfo.atk;
  	this.def = cardInfo.def;
  	this.level = cardInfo.level;
  	this.cardProperty = cardInfo.cardProperty;

  }  	  
}