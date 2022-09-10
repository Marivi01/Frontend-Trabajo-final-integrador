import { HabilidadesService } from './../../../servicios/habilidades.service';
import { Habilidades } from './../../../model/habilidades';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-habilidad',
  templateUrl: './nueva-habilidad.component.html',
  styleUrls: ['./nueva-habilidad.component.css']
})
export class NuevaHabilidadComponent implements OnInit {
nombreHab: string="";
nivelHab: number= 0;
  constructor(private habilidadesService:HabilidadesService , private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const habil= new Habilidades(this.nombreHab, this.nivelHab);
    this.habilidadesService.save(habil).subscribe(
      data=>{
        alert("Habilidad añadida");
        this.router.navigate(['']);
      },
      err=>{
        alert("Falla en la carga de habilidades");
        this.router.navigate(['']);
      }
    )
    }
  }



/* export class NuevaExperienciaComponent implements OnInit {
  nombreExp: string= "";
  descripcionExp: string= "";

  constructor(private experienciaService:ExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const expe= new Experiencia(this.nombreExp, this.descripcionExp);
    this.experienciaService.save(expe).subscribe(
      data=>{
        alert("Experiencia añadida");
        this.router.navigate(['']);
      },
      err=>{
        alert("Falla en la carga de experiencia");
        this.router.navigate(['']);
      }
    )
    }
  } */
