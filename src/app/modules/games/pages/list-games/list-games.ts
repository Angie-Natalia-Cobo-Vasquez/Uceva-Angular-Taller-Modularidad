import { Component, inject, OnInit } from '@angular/core';
import { Game } from '../../interfaces/game.interface';
import { Games } from '../../services/games';

@Component({
  selector: 'app-list-games',
  standalone: false,
  templateUrl: './list-games.html',
  styleUrl: './list-games.scss',
})
export class ListGames implements OnInit {
  games: Game[] = [];
  private gamesService = inject(Games);

  ngOnInit(): void {
    this.gamesService.getAllGames().subscribe({
      next: (games) => this.games = games,
      error: (error) => console.error(error),
    });
  }
}