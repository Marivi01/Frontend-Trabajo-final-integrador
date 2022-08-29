
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  
 // url= "http://localhost:8080/auth/";
 url='https://backporfolio1.herokuapp.com/auth/';

currentUserSubjet:BehaviorSubject<any>;
  constructor(private http: HttpClient){

   this.currentUserSubjet = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem("currentUser") || "{}"));
   console.log("El servicio de autenticación está corriendo");
  }

IniciarSesion(credenciales:any):Observable<any>
{
return this.http.post(this.url + 'login',credenciales).pipe(map(data=>{
sessionStorage.setItem(JSON.stringify(data),'currentUser')
this.currentUserSubjet.next(data);
  return data;
  console.log(data)
}))
  
}
get usuarioAutenticado()
{
  return this.currentUserSubjet.value;
}


}
