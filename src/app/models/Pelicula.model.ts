import { Model } from "./Model";
import { Persona } from "./Persona.model";

export declare class Pelicula extends Model {
  id: string;
  titulo: string;
  fechaEstreno: string;
  recaudacion: number;
  direccion: string;
  genero: string;
  productora: string;
  castPrincipal: Persona[];
  constructor(attrs?: Attrs);
}

export interface Attrs {
  id: number;
  titulo: string;
  fechaEstreno: string;
  recaudacion: number;
  direccion: string;
  genero: string;
  productora?: string;
  castPrincipal?: Persona[];
}
