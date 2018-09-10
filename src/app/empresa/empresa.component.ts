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
  muestraPersonas = true;

  constructor(private service: PersonaService) { }

  ngOnInit() {
    this.personas = this.service.getPersona();
  }

  formularioPersona(value){
    this.muestraPersonas = !this.muestraPersonas;
  }

  agregaPersona(persona: Persona) {
    this.personas.push(persona);
    this.muestraPersonas = !this.muestraPersonas;
  }

}
