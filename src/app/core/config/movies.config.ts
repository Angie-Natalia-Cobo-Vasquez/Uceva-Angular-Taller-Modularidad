import { Movie } from '../../modules/movies/interfaces/movie.interface';

/**
 * Listado de películas disponibles en el sistema.
 *
 * Esta constante simula una fuente de datos (mock) que representa
 * información de películas, utilizada para pruebas unitarias y
 * ejercicios académicos sin necesidad de un backend.
 */
export const MOVIES_DATA: Movie[] = [
  {
    id: 1,
    title: 'El Conjuro',
    director: 'James Wan',
    year: 2013,
    genre: 'Terror',
    duration: 112,
  },
  {
    id: 2,
    title: 'Coco',
    director: 'Lee Unkrich',
    year: 2017,
    genre: 'Animacion',
    duration: 105,
  },
  {
    id: 3,
    title: 'Interestelar',
    director: 'Christopher Nolan',
    year: 2014,
    genre: 'CienciaFiccion',
    duration: 169,
  },
  {
    id: 4,
    title: 'La La Land',
    director: 'Damien Chazelle',
    year: 2016,
    genre: 'Drama',
    duration: 128,
  },
  {
    id: 5,
    title: 'Mad Max: Fury Road',
    director: 'George Miller',
    year: 2015,
    genre: 'Accion',
    duration: 120,
  },
  {
    id: 6,
    title: 'Superbad',
    director: 'Greg Mottola',
    year: 2007,
    genre: 'Comedia',
    duration: 113,
  },
];