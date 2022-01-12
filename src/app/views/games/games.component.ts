import { Component, OnInit } from '@angular/core';
import { Games } from 'src/app/models/games';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  listaGames = [] as Games[];

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames() {
    this.gamesService.getGames().subscribe( (gamesRecebidos: Games[]) => {
      this.listaGames = gamesRecebidos;
      console.log(this.listaGames)
    })
  }

}
