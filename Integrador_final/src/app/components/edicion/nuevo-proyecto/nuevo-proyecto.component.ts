import { ProyectoService } from './../../../servicios/proyecto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyectos';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css'],
})
export class NuevoProyectoComponent implements OnInit {
  nombreProj: string = '';
  urlProj: string = '';
  proj: any;

  constructor(
    private proyectoService: ProyectoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarProyectos();
  }

  onCreate(): void {
    const Projects = new Proyecto(this.nombreProj, this.urlProj);
    this.proyectoService.save(Projects).subscribe(
      (data) => {
        alert('Proyecto agregado');
        this.cargarProyectos();
        this.router.navigate(['/edicion']);
      },
      (err) => {
        alert('Falla en la carga de proyecto');
        this.router.navigate(['/edicion']);
      }
    );
  }
  cargarProyectos(): void {
    this.proyectoService.lista().subscribe((data) => {
      this.proj = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.proyectoService.delete(id).subscribe(
        (data) => {
          this.cargarProyectos();
        },
        (err) => {
          alert('Error al borrar el proyecto');
        }
      );
    }
  }
}
