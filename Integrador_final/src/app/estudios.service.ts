import { Estudios } from './../model/estudios';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EstudiosService {
  URLes: string = 'https://backporfolio1.herokuapp.com/';
  // URLes: string = 'http://localhost:8080/';

  constructor(private httpClient: HttpClient) {
    console.log('el servicio de estudios esta corriendo');
  }

  public lista(): Observable<Estudios[]> {
    return this.httpClient.get<Estudios[]>(this.URLes + 'estudios/list');
  }

  public detail(id: number): Observable<Estudios> {
    return this.httpClient.get<Estudios>(this.URLes + `estudios/detail/${id}`);
  }

  public save(estudios: Estudios): Observable<any> {
    return this.httpClient.post<any>(this.URLes + 'estudios/crear', estudios);
  }

  public update(id: number, estudios: Estudios): Observable<any> {
    return this.httpClient.put<any>(
      this.URLes + `estudios/update/${id}`,
      estudios
    );
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URLes + `estudios/delete/${id}`);
  }
}
