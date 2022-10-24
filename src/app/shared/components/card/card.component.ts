import { Component, Input, OnInit } from '@angular/core';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import CardData from '../models/carddata.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() cardData: CardData | null = null; 
  @Input() cardHeight!: string;
  @Input() carddWidth!: string;


  faCircleInfo = faCircleInfo;
  constructor() {}

  ngOnInit(): void {}
}
