export class Proyecto{
  id?: number;
  nombreProj: string;
  urlProj: string;

  constructor(nombreProj:string, urlProj:string){
    this.nombreProj= nombreProj;
    this.urlProj= urlProj;
  }

}
