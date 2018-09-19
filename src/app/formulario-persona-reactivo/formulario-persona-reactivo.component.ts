import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from '../persona';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario-persona-reactivo',
  templateUrl: './formulario-persona-reactivo.component.html',
  styleUrls: ['./formulario-persona-reactivo.component.css']
})
export class FormularioPersonaReactivoComponent implements OnInit {

  @Output() send = new EventEmitter<Persona>();
  @Output() cancel = new EventEmitter<any>();
  persona = new Persona('', 1, '');
  personaForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.personaForm = this.fb.group({
      'nombre': [this.persona.nombre, [
        Validators.required,
        Validators.minLength(3)
      ]],
      'edad': [this.persona.edad, [
        Validators.required,
        Validators.min(18),
        Validators.max(100)
      ]],
      'frase': [this.persona.frase, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(300)
      ]]
    });
  }

  get f() { return this.personaForm.controls; }

  closeForm() {
    this.cancel.emit(true);
  }

  savePersona() {
    this.send.emit(this.personaForm.value);
  }

}
