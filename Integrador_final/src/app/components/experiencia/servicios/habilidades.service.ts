import { Habilidades } from './../model/habilidades';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  //URLhab='https://backporfolio1.herokuapp.com/'
  URLhab= 'http://localhost:8080/'




  constructor(private httpClient:HttpClient) {
  console.log("el servicio de habilidades esta corriendo")
}


public lista():Observable<Habilidades[]>{
  return this.httpClient.get<Habilidades[]>(this.URLhab + 'ver/habilidad');
}


 public detail(id:number): Observable<Habilidades>{
  return this.httpClient.get<Habilidades>(this.URLhab + `[buscar/habilidades/${id}`);
}

public save (habilidades:Habilidades): Observable<any>{
return this.httpClient.post<any> (this.URLhab +'new/habilidad', habilidades);

}

public update(id:number, habilidades: Habilidades): Observable<any>{
return this.httpClient.put<any>(this.URLhab + `update/${id}`, habilidades);
}

public delete (id:number):Observable<any>{
return this.httpClient.delete<any>(this.URLhab +`deleteHabilidades/${id}`);
}

}


