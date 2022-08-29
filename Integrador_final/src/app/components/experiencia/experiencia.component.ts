import { Experiencia } from './../../model/experiencia';
import { ExperienciaService } from './../../servicios/experiencia.service';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];

  constructor(private experienciaService: ExperienciaService) {}




  ngOnInit(): void {
    this.cargarExperiencia();

  }

cargarExperiencia(): void{
  this.experienciaService.lista().subscribe(data=>{this.expe=data;})

}
}





