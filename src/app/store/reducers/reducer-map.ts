// NgRX
import { ActionReducerMap } from "@ngrx/store";

// Reducers
import {
  PeliculasDataState,
  PeliculasFormState,
  PeliculasReducerFunction,
  PeliculasFormReducerFunction,
} from "./peliculas.reducers";

export interface PeliculasState {
  PeliculasDataState: PeliculasDataState;
  PeliculasFormState: PeliculasFormState;
}
export const PeliculasReducers: ActionReducerMap<PeliculasState> = {
  PeliculasDataState: PeliculasReducerFunction,
  PeliculasFormState: PeliculasFormReducerFunction,
};
