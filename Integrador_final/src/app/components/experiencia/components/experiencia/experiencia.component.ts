import { AutenticacionService } from './../../servicios/autenticacion.service';
import { Experiencia } from './../../model/experiencia';
import { ExperienciaService } from './../../servicios/experiencia.service';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Token } from '@angular/compiler';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];
  currentUser: any;

  currentUserSubjet: any;
  sessionStorage: any;

  //autenticacionService:AutenticacionService
  constructor(private experienciaService: ExperienciaService) {}
  //isLogged: boolean = true;

  ngOnInit(): void {
    this.cargarExperiencia();

    //Metodo para saber si el usuario esta logeado como ROLE_ADMIN
    /* if (this.autenticacionService.usuarioAutenticado()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    console.log(this.isLogged); */
  }

  cargarExperiencia(): void {
    this.experienciaService.lista().subscribe((data) => {
      this.expe = data;
    });
  }
}
