export class Estudios {
  id?: number;
  institucion: string;
  titulo: string;

  constructor(institucion: string, titulo:string){
    this.institucion= institucion;
    this.titulo= titulo;
  }

}
