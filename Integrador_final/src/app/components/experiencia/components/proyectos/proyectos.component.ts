import { ProyectoService } from './../../servicios/proyecto.service';
import { Component, OnInit } from '@angular/core';
import { Proyecto } from './../../model/proyectos';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  projects: Proyecto[] = [];
  isLogged:boolean=false

  constructor(private autenticacionService:AutenticacionService, private proyectoService:ProyectoService) { }

  ngOnInit(): void {
    this.cargarProyecto();
  }

  cargarProyecto():void{
    this.proyectoService.lista().subscribe(data=>{this.projects=data;})
  }

  userLogged() {
    var currentUserSubjet= this.autenticacionService.usuarioAutenticado;
  if(currentUserSubjet !==null ){
    return this.isLogged = true;
  } else {
    return this.isLogged = false;
  }
}

}
