import { HabilidadesService } from './../../../servicios/habilidades.service';
import { Habilidades } from './../../../model/habilidades';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-habilidad',
  templateUrl: './nueva-habilidad.component.html',
  styleUrls: ['./nueva-habilidad.component.css'],
})
export class NuevaHabilidadComponent implements OnInit {
  nombreHab: string = '';
  nivelHab: number = null;
  habil: any;
  constructor(
    private habilidadesService: HabilidadesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarHabilidad();
  }

  onCreate(): void {
    const habil = new Habilidades(this.nombreHab, this.nivelHab);
    this.habilidadesService.save(habil).subscribe(
      (data) => {
        alert('Habilidad añadida');
        this.cargarHabilidad();
        this.router.navigate(['/edicion']);
      },
      (err) => {
        alert('Falla en la carga de habilidades');
        this.router.navigate(['/edicion']);
      }
    );
  }

  cargarHabilidad(): void {
    this.habilidadesService.lista().subscribe((data) => {
      this.habil = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.habilidadesService.delete(id).subscribe(
        (data) => {
          this.cargarHabilidad();
        },
        (err) => {
          alert('Error al borrar la habilidad');
        }
      );
    }
  }
}
