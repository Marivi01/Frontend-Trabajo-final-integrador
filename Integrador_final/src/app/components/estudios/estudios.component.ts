import { EstudiosService } from './../../servicios/estudios.service';
import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/model/estudios';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})

export class EstudiosComponent implements OnInit {
est: Estudios[] = [];
  constructor(private estudiosService: EstudiosService) { }



  ngOnInit(): void {
    this.cargarEstudios();
  }
cargarEstudios(): void{
  this.estudiosService.lista().subscribe(data=>{this.est=data;})

}
}


/* @Component({
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
} */
