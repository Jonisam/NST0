import { Persona } from './persona';
import { Injectable } from '@angular/core';

const PERSONAS: Persona[] = [
  {
    nombre: 'Sergio Alcalá',
    edad: 30,
    frase: 'Nada es imposible',
    direccion: {
      id: 1,
      calle: 'Ferreria 195',
      colonia: 'Santa catarina',
      pais: 'México'
    }
  },
  {
    nombre: 'Jonathan Arontes',
    edad: 25,
    frase: 'El cambio es hoy',
    direccion: {
      id: 1,
      calle: 'Ferreria 195',
      colonia: 'Santa catarina',
      pais: 'México'
    }
  },
  {
    nombre: 'Jessica Arontes',
    edad: 30,
    frase: 'Simpre atenta',
    direccion: {
      id: 1,
      calle: 'Ferreria 195',
      colonia: 'Santa catarina',
      pais: 'México'
    }
  }
];

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  constructor() { }

  getPersona(): Persona[] {
    return PERSONAS;
  }
}
