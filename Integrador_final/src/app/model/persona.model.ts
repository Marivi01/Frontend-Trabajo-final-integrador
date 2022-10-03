export class Persona {
  id?: number;
  nombre: String;
  apellido: String;
  titulo: String;
  descripcion: String;

  constructor(
    nombre: String,
    apellido: String,
    titulo: String,
    descripcion: String
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.titulo = titulo;
    this.descripcion = descripcion;
  }
}
