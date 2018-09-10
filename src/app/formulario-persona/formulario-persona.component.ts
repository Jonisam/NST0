import { Persona } from './../persona';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent implements OnInit {

  @Output() send = new EventEmitter<Persona>();
  @Output() cancel = new EventEmitter<any>();
  persona = new Persona('', 1, '');

  constructor() { }

  ngOnInit() {
  }

  closeForm() {
    this.cancel.emit(true);
  }

  savePersona() {
    this.send.emit(this.persona);
  }

}
