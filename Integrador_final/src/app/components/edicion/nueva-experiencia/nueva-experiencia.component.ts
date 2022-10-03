import { ExperienciaService } from './../../../servicios/experiencia.service';
import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css'],
})
export class NuevaExperienciaComponent implements OnInit {
  nombreExp: string = '';
  descripcionExp: string = '';
  expe: any;

  constructor(
    private experienciaService: ExperienciaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarExperiencia();
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreExp, this.descripcionExp);
    this.experienciaService.save(expe).subscribe(
      (data) => {
        alert('Experiencia añadida');
        this.cargarExperiencia();
        this.router.navigate(['/edicion']);
      },
      (err) => {
        alert('Falla en la carga de experiencia');
        this.router.navigate(['/edicion']);
      }
    );
  }

  cargarExperiencia(): void {
    this.experienciaService.lista().subscribe((data) => {
      this.expe = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.experienciaService.delete(id).subscribe(
        (data) => {
          this.cargarExperiencia();
        },
        (err) => {
          alert('Error al borrar la experiencia');
        }
      );
    }
  }
}
