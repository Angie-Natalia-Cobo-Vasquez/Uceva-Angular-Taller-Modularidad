import { Course } from '../../modules/courses/interfaces/course.interface';

/** Datos academicos consumidos por el modulo de cursos. */
export const COURSES: Course[] = [
  {
    id: 1,
    name: 'ELECTIVA EN INGENIERIA II',
    group: '1',
    classroom: 'AULA I201-DIGITAL DEL BLOQUE I - LOS ALMENDROS',
    teacher: 'MESTIZO VALENCIA ANDRES DAVID',
    schedule: '14:50 - 18:10',
  },
  {
    id: 2,
    name: 'PROYECTO INTEGRADOR',
    group: '1',
    classroom: 'AULA I201-DIGITAL DEL BLOQUE I - LOS ALMENDROS',
    teacher: 'BERMUDEZ MAZUERA YURI MERCEDES',
    schedule: '8:10 - 9:50',
  },
  {
    id: 3,
    name: 'GERENCIA DE PROYECTOS',
    group: '1',
    classroom: 'AULA B103-DIGITAL DEL BLOQUE B - AVELLANOS',
    teacher: 'HERRERA RESTREPO ANGELA MARIA',
    schedule: '9:0 - 12:20',
  },
];