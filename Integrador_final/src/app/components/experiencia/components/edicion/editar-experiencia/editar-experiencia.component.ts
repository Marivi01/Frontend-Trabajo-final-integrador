import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from './../../../servicios/experiencia.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css'],
})
export class EditarExperienciaComponent implements OnInit {
  expLab: Experiencia = null;

  constructor(
    private experienciaS: ExperienciaService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaS.detail(id).subscribe(
      (data) => {
        this.expLab = data;
      }
      /* (err) => {
        alert('error1 al editar experiencia');
        this.router.navigate(['']);
      } */
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaS.update(id, this.expLab).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('error2 al editar experiencia');
        this.router.navigate(['']);
      }
    );
  }
}
