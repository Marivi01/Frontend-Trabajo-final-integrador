import { ActivatedRoute, Router } from '@angular/router';
import { EstudiosService } from './../../../servicios/estudios.service';
import { Estudios } from './../../../model/estudios';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css'],
})
export class EditarEducacionComponent implements OnInit {
  estud: Estudios = null;

  constructor(
    private estudiosS: EstudiosService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.estudiosS.detail(id).subscribe(
      (data) => {
        this.estud = data;
      },
      (err) => {
        alert('error1 al editar experiencia');
        this.router.navigate(['/edicion']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.estudiosS.update(id, this.estud).subscribe(
      (data) => {
        this.router.navigate(['/edicion']);
      },
      (err) => {
        alert('error2 al editar educacion');
        //this.router.navigate(['']);
      }
    );
  }
}
