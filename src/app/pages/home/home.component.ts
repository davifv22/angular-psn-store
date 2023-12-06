import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { CommonModule } from '@angular/common';
import { dataGames } from '../../data/dataGames';
import { GameComponent } from '../game/game.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CardComponent, CommonModule, RouterLink, GameComponent]
})
export class HomeComponent implements OnInit {

  cards:Array<any> = ['']

  ngOnInit(): void {
    this.cards = dataGames
  }
}
