// Ngrx
import { createReducer, on, Action } from "@ngrx/store";

// Store
import { PeliculasActions } from "../actions/action-types";

// API
import { Pelicula } from "../../models/Pelicula.model";
import { Persona } from "../../models/Persona.model";

// DATA VIEW STATE
export interface PeliculasDataState {
  peliculas: Pelicula[];
  personas: Persona[];
}

export const initialState: PeliculasDataState = {
  peliculas: null,
  personas: null,
};

const PeliculasReducer = createReducer(
  initialState,
  on(PeliculasActions.getPeliculasSuccess, (state, action) => {
    return {
      ...state,
      peliculas: action.payload,
    };
  }),
  on(PeliculasActions.getPersonasSuccess, (state, action) => {
    return {
      ...state,
      personas: action.payload,
    };
  }),
  on(PeliculasActions.getPeliculaByIdSuccess, (state, action) => {
    return { ...state, PeliculaDetails: action.payload };
  }),

  on(PeliculasActions.clearData, () => {
    return { ...initialState };
  })
);

export function PeliculasReducerFunction(
  state: PeliculasDataState | undefined,
  action: Action
): any {
  return PeliculasReducer(state, action);
}

// FORM VIEW STATE
export interface PeliculasFormState {
  peliculaList: Pelicula[];
  selectedPersona: Persona;
  selectedPelicula: Pelicula;
  castPrincipal: Persona[];
  titulo: string;
  fechaEstreno: string;
  recaudacion: number;
  direccion: string;
  genero: string;
  productora: string;
}

export const initialFormState: PeliculasFormState = {
  peliculaList: null,
  selectedPersona: null,
  selectedPelicula: null,
  castPrincipal: null,
  // If a reactive component with ngrx is need, state is required updates are already setted
  titulo: null,
  fechaEstreno: null,
  recaudacion: null,
  direccion: null,
  genero: null,
  productora: null,
};

const PeliculasFormReducer = createReducer(
  initialFormState,
  on(PeliculasActions.getPeliculasSuccess, (state, action) => {
    return {
      ...state,
      peliculaList: action.payload,
    };
  }),

  on(PeliculasActions.setPeliculaSuccess, (state, action) => {
    return {
      ...state,
      peliculaList: action.payload,
    };
  }),
  on(PeliculasActions.updatePeliculaSuccess, (state, action) => {
    return {
      ...state,
      peliculaList: action.payload,
    };
  }),
  on(PeliculasActions.deletePeliculaSuccess, (state, action) => {
    return {
      ...state,
      peliculaList: action.payload,
    };
  }),
  on(PeliculasActions.updateForm, (state, action) => {
    const actionValue = {
      [Object.keys(action)[0]]: action[Object.keys(action)[0]],
    };
    return Object.assign({}, state, actionValue);
  }),
  on(PeliculasActions.getPeliculasSuccess, (state, action) => {
    return {
      ...state,
      peliculaList: action.payload,
    };
  }),
  on(PeliculasActions.clearCurrentPeliculaForm, (state) => {
    return {
      ...state,
      selectedPelicula: null,
      titulo: null,
      fechaEstreno: null,
      recaudacion: null,
      direccion: null,
      genero: null,
      productora: null,
    };
  }),
  on(PeliculasActions.clearForm, () => {
    return initialFormState;
  })
);

export function PeliculasFormReducerFunction(
  state: PeliculasFormState | undefined,
  action: Action
): PeliculasFormState {
  return PeliculasFormReducer(state, action);
}
