/** Modelo tipado de un curso academico. */
export interface Course {
  /** Identificador unico del curso. */
  id: number;
  /** Nombre del curso. */
  name: string;
  /** Grupo del curso. */
  group: string;
  /** Aula y sede donde se dicta el curso. */
  classroom: string;
  /** Docente responsable. */
  teacher: string;
  /** Horario del curso. */
  schedule: string;
}