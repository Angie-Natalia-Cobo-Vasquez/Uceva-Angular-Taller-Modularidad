/**
 * URL del endpoint público de FreeToGame que suministra el listado de juegos.
 *
 * @remarks
 * Este constante centraliza, en la carpeta `core/config`, la fuente de datos
 * del módulo `games`; la información se consulta en tiempo real mediante una
 * petición `GET` con `HttpClient`.
 *
 * La API responde con un arreglo de objetos que cumplen la interfaz {@link Game}.
 *
 * @type {string}
 *
 * @see {@link Games} Servicio que consume este endpoint
 */
export const GAMES_API_URL: string = 'https://www.freetogame.com/api/games';