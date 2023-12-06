import { Component, OnInit } from '@angular/core';
import { dataGames } from '../../data/dataGames';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent implements OnInit {
  image:string = '';
  label:string = ''
  type:string = ''
  price:string = ''
  description:string = ''
  id:string = ''


  constructor (
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(value =>
      this.id = value['id']
    )
    this.setValuesToComponent(this.id)
   }

   setValuesToComponent(id:string){
    const result = dataGames.filter(game => game.id == id)[0]

    this.id = result['id'].replace(/-/g, ' ').toLocaleUpperCase();
    this.label = result['label'];
    this.image = result['image'];
    this.description = result['description']
    this.type = result['type'].replace(/,/g, ' |');
    this.price = result['price'];
   }
}
