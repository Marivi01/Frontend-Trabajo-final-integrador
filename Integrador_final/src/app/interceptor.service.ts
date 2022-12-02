import { AutenticacionService } from './autenticacion.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

   constructor(private autenticacionService:AutenticacionService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    var currentUser= this.autenticacionService.usuarioAutenticado;
  if(currentUser && currentUser.accesToken)
  {
    req=req.clone({
     setHeaders:{Authorization: "Bearer ${token}"}
    });
    console.log(req)
  }

  console.log('el servicio de interceptor esta corriendo' + JSON.stringify(currentUser))
  return next.handle(req)
}
}

