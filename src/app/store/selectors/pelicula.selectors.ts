// Ngrx
import { createFeatureSelector, createSelector } from "@ngrx/store";

// Store
import { PeliculasState } from "../reducers/reducer-map";

export const getPeliculasModuleState =
  createFeatureSelector<PeliculasState>("peliculas");

// VIEW DATA SELECTORS
export const getPeliculasState = createSelector(
  getPeliculasModuleState,
  (state) => state.PeliculasDataState
);

export const getPeliculas = createSelector(
  getPeliculasState,
  (state) => state.peliculas
);

export const getPersonas = createSelector(
  getPeliculasState,
  (state) => state.personas
);

export const isViewReady = createSelector(getPeliculasState, (state) => {
  return !!state.peliculas;
});

// VIEW FORM SELECTORS
export const getPeliculasFormState = createSelector(
  getPeliculasModuleState,
  (state) => state.PeliculasFormState
);

export const getPeliculaList = createSelector(
  getPeliculasFormState,
  (state) => state.peliculaList
);

export const getSelectedPelicula = createSelector(
  getPeliculasFormState,
  (state) => state.selectedPelicula
);

export const getSelectedPersona = createSelector(
  getPeliculasFormState,
  (state) => state.selectedPersona
);

export const getCastPrincipal = createSelector(
  getPeliculasFormState,
  (state) => state.castPrincipal
);
