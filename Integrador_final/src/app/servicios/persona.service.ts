import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>('https://localhost:8080/buscar/persona/1')
//return this.http.get<persona>(this.url + '/buscar/persona/1')
  }
}
