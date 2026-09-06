/**
 * Género cinematográfico permitido para una película.
 */
export type MovieGenre =
  | 'Terror'
  | 'Comedia'
  | 'Drama'
  | 'Accion'
  | 'Animacion'
  | 'CienciaFiccion';

/**
 * Representa una película disponible en el catálogo.
 */
export interface Movie {
  /** Identificador único de la película */
  id: number;

  /** Título de la película */
  title: string;

  /** Director de la película */
  director: string;

  /** Año de estreno */
  year: number;

  /** Género principal */
  genre: MovieGenre;

  /** Duración en minutos */
  duration: number;
}