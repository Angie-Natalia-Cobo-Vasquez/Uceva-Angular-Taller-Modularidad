/**
 * Interfaz que representa un videojuego de la API pública FreeToGame.
 *
 * @remarks
 * El modelo corresponde a la respuesta del endpoint
 * `https://www.freetogame.com/api/games` y fue generado con la herramienta
 * [Quicktype](https://quicktype.io/) a partir de una muestra del JSON.
 * Se usa para tipar los datos consumidos por el servicio {@link Games} y
 * renderizados por el componente {@link TableGames} del módulo `games`.
 *
 * @example
 * ```ts
 * import { Game } from './game.interface';
 *
 * const juego: Game = {
 *   id: 540,
 *   title: 'Overwatch 2',
 *   thumbnail: 'https://.../thumbnail.jpg',
 *   short_description: 'A hero-focused shooter',
 *   game_url: 'https://www.freetogame.com/open/overwatch-2',
 *   genre: 'Shooter',
 *   platform: 'PC (Windows)',
 *   publisher: 'Blizzard Entertainment',
 *   developer: 'Blizzard Entertainment',
 *   release_date: '2022-10-04',
 *   freetogame_profile_url: 'https://www.freetogame.com/overwatch-2',
 * };
 * ```
 */
export interface Game {
    /** Identificador único del juego. */
    id:                     number;
    /** Título o nombre del juego. */
    title:                  string;
    /** URL de la imagen en miniatura (thumbnail) del juego. */
    thumbnail:              string;
    /** Descripción corta del juego. */
    short_description:      string;
    /** URL del juego dentro de la plataforma FreeToGame. */
    game_url:               string;
    /** Género del juego (por ejemplo: `Shooter`, `MMORPG`). */
    genre:                  string;
    /** Plataforma o plataformas soportadas (por ejemplo: `PC (Windows)`). */
    platform:               string;
    /** Empresa publicadora del juego. */
    publisher:              string;
    /** Empresa desarrolladora del juego. */
    developer:              string;
    /** Fecha de lanzamiento del juego con formato `YYYY-MM-DD`. */
    release_date:           string;
    /** URL del perfil del juego dentro de FreeToGame. */
    freetogame_profile_url: string;
}
