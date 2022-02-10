// Ngrx
import { createAction, props } from "@ngrx/store";

// API
import { Pelicula } from "../../models/Pelicula.model";

import { Persona } from "src/app/models/Persona.model";

// VIEW DATA REQUEST ACTIONS
export const getPeliculas = createAction("[Peliculas] Get Peliculas");

export const getPeliculasSuccess = createAction(
  "[Peliculas] Get Peliculas Success",
  props<{ payload: Pelicula[] }>()
);

export const getPeliculaById = createAction(
  "[Pelicula] Get Pelicula By Id",
  props<{ payload: Pelicula }>()
);
export const getPeliculaByIdSuccess = createAction(
  "[Pelicula] Get Pelicula By Id Success",
  props<{ payload: Pelicula }>()
);
//
export const getPeliculaFail = createAction(
  "[Pelicula] Get Pelicula Fail",
  props<{ payload: any }>()
);

export const getPersonas = createAction("[Pelicula] Get Personas");

export const getPersonasSuccess = createAction(
  "[Pelicula] Get Persona Success",
  props<{ payload: Persona[] }>()
);

export const getPersonasFail = createAction("[Pelicula] Get Pelicula  Fail");

export const getCastByPeliculaId = createAction(
  "[Pelicula] Get Cast By Pelicula Id",
  props<{ payload: Pelicula }>()
);
export const getCastByPeliculaIdSuccess = createAction(
  "[Pelicula] Get Cast By Pelicula Id Success",
  props<{ payload: Persona[] }>()
);

export const deletePelicula = createAction(
  "[Peliculas] Remove Pelicula",
  props<{ pelicula: Pelicula }>()
);

export const deletePeliculaSuccess = createAction(
  "[Pelicula] Remove Pelicula Success",
  props<{ payload: Pelicula[] }>()
);

export const setPelicula = createAction(
  "[Pelicula] Set Pelicula",
  props<{ pelicula: Pelicula }>()
);

export const setPeliculaSuccess = createAction(
  "[Pelicula] Set Pelicula Success",
  props<{ payload: Pelicula[] }>()
);

export const updatePelicula = createAction(
  "[Pelicula] Update Pelicula",
  props<{ pelicula: Pelicula }>()
);

export const updatePeliculaSuccess = createAction(
  "[Pelicula] Update Pelicula Success",
  props<{ payload: Pelicula[] }>()
);

// FORM ACTIONS
export const updateForm = createAction(
  "[Peliculas] Update Form",
  props<{
    [key: string]: any;
  }>()
);

export const deleteSelectedCast = createAction(
  "[Peliculas] Remove Selected Cast",
  props<{ persona: Persona; pelicula: Pelicula }>()
);

export const deleteSelectedCastSuccess = createAction(
  "[Pelicula] Remove Pelicula Success",
  props<{ payload: Pelicula[] }>()
);

export const setSelectedCast = createAction(
  "[Pelicula] Set Selected Cast",
  props<{ persona: Persona; pelicula: Pelicula }>()
);

export const setSelectedCastSuccess = createAction(
  "[Pelicula] Set Selected Cast Success",
  props<{ payload: Pelicula[] }>()
);

// CLEAN ACTIONS
export const clearForm = createAction("[Peliculas] Clear Form");

export const clearCurrentPeliculaForm = createAction(
  "[Peliculas] Clear Current Pelicula Form"
);

export const clearData = createAction("[Peliculas] Clear  Data");
