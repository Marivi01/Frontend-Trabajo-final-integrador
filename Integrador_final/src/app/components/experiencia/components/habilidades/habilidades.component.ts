import { HabilidadesService } from './../../servicios/habilidades.service';
import { Habilidades } from './../../model/habilidades';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habil: Habilidades[] =[];
  constructor(private habilidadesService: HabilidadesService) { }

  ngOnInit(): void {
    this.cargarHabilidades();
  }

  cargarHabilidades(): void{
    this.habilidadesService.lista().subscribe(data=>{this.habil=data;})

  }

}
