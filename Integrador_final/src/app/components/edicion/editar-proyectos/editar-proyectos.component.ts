import { Proyecto } from './../../../model/proyectos';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-editar-proyectos',
  templateUrl: './editar-proyectos.component.html',
  styleUrls: ['./editar-proyectos.component.css'],
})
export class EditarProyectosComponent implements OnInit {
  editProject: Proyecto = null;

  constructor(
    private proyectoS: ProyectoService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.detail(id).subscribe(
      (data) => {
        this.editProject = data;
      },
      (err) => {
        alert('error1 al editar  proyecto');
        this.router.navigate(['/edicion']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoS.update(id, this.editProject).subscribe(
      (data) => {
        alert('proyecto actualizado con exito');
        this.router.navigate(['/edicion']);
      },
      (err) => {
        alert('error2 al editar el proyecto');
        this.router.navigate(['/edicion']);
      }
    );
  }
}
