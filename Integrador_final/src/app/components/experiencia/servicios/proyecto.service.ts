import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Proyecto } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

//URLpro='https://backporfolio1.herokuapp.com/proyectos/'
URLpro:string = 'http://localhost:8080/proyectos/'


  constructor(private httpClient:HttpClient) {
    console.log("el servicio de Proyectos esta corriendo")
   }

   public lista():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.URLpro + 'ver');
  }

  public detail(id:number): Observable<Proyecto>{
    return this.httpClient.get<Proyecto>(this.URLpro + `detail/${id}`);
  }

  public save (proyecto: Proyecto): Observable<any>{
    return this.httpClient.post<any>(this.URLpro + 'new', proyecto);
  }

  public update(id:number,proyecto: Proyecto): Observable<any>{
      return this.httpClient.put<any>(this.URLpro + `update/${id}`, proyecto);
  }

  public delete (id:number):Observable<any>{
        return this.httpClient.delete<any>(this.URLpro +`delete/${id}`);
  }

}
