import { HabilidadesService } from './../../../servicios/habilidades.service';
import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/model/habilidades';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-habilidad',
  templateUrl: './editar-habilidad.component.html',
  styleUrls: ['./editar-habilidad.component.css'],
})
export class EditarHabilidadComponent implements OnInit {
  hability: Habilidades = null;

  constructor(
    private habilidadesS: HabilidadesService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadesS.detail(id).subscribe(
      (data) => {
        this.hability = data;
      },
      (err) => {
        // alert('error1 al editar experiencia');
        this.router.navigate(['/edicion']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadesS.update(id, this.hability).subscribe(
      (data) => {
        alert('Habilidad actualizada');

        this.router.navigate(['/edicion']);
      },
      (err) => {
        alert('error2 al editar habilidad');
        this.router.navigate(['/edicion']);
      }
    );
  }
}
