import { Model } from "./Model";

export declare class Persona extends Model {
  id: number;
  apellidoNombre: string;

  constructor(attrs?: Attrs);
}
export interface Attrs {
  id: number;
  apellidoNombre: string;
}
