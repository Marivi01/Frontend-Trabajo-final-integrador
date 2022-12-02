import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  URLex = 'https://backporfolio1.herokuapp.com/exp_lab/';
 // URLex: string = 'http://localhost:8080/exp_lab/';

  constructor(private httpClient: HttpClient) {
    console.log('el servicio de experiencia esta corriendo');
  }

  public lista(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.URLex + 'list');
  }

  public detail(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.URLex + `detail/${id}`);
  }

  public save(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.URLex + 'crear', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(this.URLex + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URLex + `delete/${id}`);
  }
}
