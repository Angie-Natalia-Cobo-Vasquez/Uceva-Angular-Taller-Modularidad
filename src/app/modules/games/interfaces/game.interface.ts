/**
 * Videojuego consumido desde la API pública FreeToGame.
 *
 * @remarks
 * A diferencia de UsersService y ProductsService, la información
 * NO proviene de un archivo de configuración en Core: se obtiene
 * en tiempo real desde https://www.freetogame.com/api/games.
 */
export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
}