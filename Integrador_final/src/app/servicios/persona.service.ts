import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
 // url:string = 'http://localhost:8080';
 url:string = 'https://backporfolio1.herokuapp.com';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<Persona>{
   // return this.http.get<Persona>
    //('../../assets/data/data.json')
   // return this.http.get<Persona>(this.url +'/ver/personas')
return this.http.get<Persona>(this.url + '/buscar/persona/1')
  }
}
