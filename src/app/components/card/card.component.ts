import { Component, Input, OnInit } from '@angular/core';
import { CardLabelComponent } from './card-label/card-label.component';
import { CardPriceComponent } from './card-price/card-price.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  imports: [CardLabelComponent, CardPriceComponent, RouterLink, CommonModule],
})
export class CardComponent implements OnInit {
  @Input()
  id:string = '0';
  @Input()
  gameCover:string = '';
  @Input()
  gameLabel:string = '';
  @Input()
  gameType:string = '';
  @Input()
  gamePrice:string = '0';
  @Input()
  cardTitle:string = '';

  ngOnInit(): void { }
}

