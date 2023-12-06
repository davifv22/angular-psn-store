import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-price',
  standalone: true,
  imports: [],
  templateUrl: './card-price.component.html',
  styleUrl: './card-price.component.css'
})
export class CardPriceComponent implements OnInit {

  @Input()
  gameType:string = '';
  @Input()
  gamePrice:string = '0'
  @Input()
  cardTitle:string = ''

  ngOnInit(): void {  }

}
