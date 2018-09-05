import { PersonaService } from './../persona.service';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  personas: Persona[];

  constructor(private service: PersonaService) { }

  ngOnInit() {
    this.personas = this.service.getPersona();
  }

}
