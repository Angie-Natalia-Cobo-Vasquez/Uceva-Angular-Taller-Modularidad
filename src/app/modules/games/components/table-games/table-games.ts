import { Component, Input } from '@angular/core';
import { BadgeType } from '../../../shared/interfaces/badge.interface';
import { Game } from '../../interfaces/game.interface';

/**
 * Mapa de género de videojuego a color de badge.
 */
const GENRE_BADGE_MAP: Record<string, BadgeType> = {
  Shooter: 'danger',
  MMORPG: 'primary',
  Strategy: 'warning',
  MOBA: 'info',
  'Card Game': 'success',
  Fighting: 'secondary',
};

@Component({
  selector: 'app-table-games',
  standalone: false,
  templateUrl: './table-games.html',
  styleUrl: './table-games.scss',
})
export class TableGames {
  @Input() games: Game[] = [];

  getGenreBadge(genre: string): BadgeType {
    return GENRE_BADGE_MAP[genre] ?? 'secondary';
  }
}