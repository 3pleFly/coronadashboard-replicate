import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import CardData from '../models/carddata.model';

@Component({
  selector: 'app-card-table-section',
  templateUrl: './card-table-section.component.html',
  styleUrls: ['./card-table-section.component.scss']
})
export class CardTableSectionComponent implements OnInit {

  cards: CardData[] = environment.cards;
  lastSevenDaysCards: CardData[] = environment.lastSevenDays;

  constructor() { }

  ngOnInit(): void {
  }

}
