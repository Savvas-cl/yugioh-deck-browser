import { Component, OnInit, Input } from '@angular/core';

import { Card } from '../card.model';

@Component({
  selector: 'app-card-information',
  templateUrl: './card-information.component.html',
  styleUrls: ['./card-information.component.css']
})
export class CardInformationComponent implements OnInit {

  @Input() cardInformation: Card;
  
  constructor() { }

  ngOnInit() {
  }

}
