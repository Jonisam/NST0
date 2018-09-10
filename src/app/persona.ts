import { Direccion } from './direccion';
export class Persona {
  constructor(
    public nombre: string,
    public edad: number,
    public frase: string,
    public direccion?: Direccion
  ) { }
}
