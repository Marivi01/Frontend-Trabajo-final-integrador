import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from './../../../servicios/estudios.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-estudio',
  templateUrl: './nuevo-estudio.component.html',
  styleUrls: ['./nuevo-estudio.component.css'],
})
export class NuevoEstudioComponent implements OnInit {
  institucion: string = '';
  titulo: string = '';
  est: any;

  constructor(
    private estudiosService: EstudiosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarEstudios();
  }

  onCreate(): void {
    const est = new Estudios(this.institucion, this.titulo);
    this.estudiosService.save(est).subscribe(
      (data) => {
        alert('Estudio añadido');
        this.cargarEstudios();
        this.router.navigate(['/edicion']);
      },
      (err) => {
        alert('Falla en la carga de estudio');
        this.router.navigate(['/edicion']);
      }
    );
  }

  cargarEstudios(): void {
    this.estudiosService.lista().subscribe((data) => {
      this.est = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.estudiosService.delete(id).subscribe(
        (data) => {
          this.cargarEstudios();
        },
        (err) => {
          alert('Error al borrar el estudio');
        }
      );
    }
  }
}
