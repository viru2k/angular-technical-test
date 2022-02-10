import { Model } from "./Model";
import { Persona } from "./Persona.model";

export declare class Cast extends Model {
  id: number;
  apellidoNombre: string;

  constructor(attrs?: Attrs);
}
export interface Attrs {
  id: number;
  Persona: Persona;
}
