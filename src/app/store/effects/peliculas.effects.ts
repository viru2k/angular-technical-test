// Angular
import { Injectable } from "@angular/core";

// Ngrx
import { Actions, createEffect, ofType } from "@ngrx/effects";

// Rxjs
import { of } from "rxjs";
import { map, catchError, exhaustMap, switchMap } from "rxjs/operators";

// Store
import { PeliculasActions } from "../actions/action-types";

// API

import { Pelicula } from "../../models/Pelicula.model";
import { PeliculaService } from "../../services/pelicula.service";
import { Persona } from "src/app/models/Persona.model";
import { updatePelicula, deletePelicula } from "../actions/peliculas.actions";

@Injectable()
export class PeliculasEffects {
  constructor(
    private actions$: Actions,
    private peliculaService: PeliculaService
  ) {}

  getPeliculas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeliculasActions.getPeliculas),
      exhaustMap(() =>
        this.peliculaService.getPeliculas().pipe(
          map((data: Pelicula[]) => {
            return PeliculasActions.getPeliculasSuccess({
              payload: data,
            });
          }),
          catchError((error) => of(PeliculasActions.getPeliculaFail(error)))
        )
      )
    )
  );

  updatePeliculas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeliculasActions.updatePelicula),
      exhaustMap((payload) =>
        this.peliculaService.putPelicula(payload.pelicula).pipe(
          map((data) => {
            return PeliculasActions.updatePeliculaSuccess({
              payload: data,
            });
          }),
          catchError((error) => of(PeliculasActions.getPeliculaFail(error)))
        )
      )
    )
  );

  setPeliculas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeliculasActions.setPelicula),
      exhaustMap((payload) =>
        this.peliculaService.postPelicula(payload.pelicula).pipe(
          map((data) => {
            return PeliculasActions.setPeliculaSuccess({
              payload: data,
            });
          }),
          catchError((error) => of(PeliculasActions.getPeliculaFail(error)))
        )
      )
    )
  );

  deletePeliculas$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeliculasActions.deletePelicula),
      exhaustMap((payload) =>
        this.peliculaService.deletePelicula(payload.pelicula).pipe(
          map((data) => {
            return PeliculasActions.deletePeliculaSuccess({
              payload: data,
            });
          }),
          catchError((error) => of(PeliculasActions.getPeliculaFail(error)))
        )
      )
    )
  );

  getPersona$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeliculasActions.getPersonas),
      exhaustMap(() =>
        this.peliculaService.getActores().pipe(
          map((data: Persona[]) => {
            return PeliculasActions.getPersonasSuccess({
              payload: data,
            });
          }),
          catchError((error) => of(PeliculasActions.getPeliculaFail(error)))
        )
      )
    )
  );

  getCast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeliculasActions.getCastByPeliculaId),
      exhaustMap((data) =>
        this.peliculaService.getCast(data.payload).pipe(
          map((data: Persona[]) => {
            return PeliculasActions.getCastByPeliculaIdSuccess({
              payload: data,
            });
          }),
          catchError((error) => of(PeliculasActions.getPeliculaFail(error)))
        )
      )
    )
  );

  setCast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeliculasActions.setSelectedCast),
      exhaustMap((payload) =>
        this.peliculaService
          .postSelectedCast(payload.persona, payload.pelicula)
          .pipe(
            map((data) => {
              return PeliculasActions.setSelectedCastSuccess({
                payload: data,
              });
            }),
            catchError((error) => of(PeliculasActions.getPeliculaFail(error)))
          )
      )
    )
  );

  deleteCast$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeliculasActions.deleteSelectedCast),
      exhaustMap((payload) =>
        this.peliculaService
          .deleteSelectedCast(payload.persona, payload.pelicula)
          .pipe(
            map((data) => {
              return PeliculasActions.deleteSelectedCastSuccess({
                payload: data,
              });
            }),
            catchError((error) => of(PeliculasActions.getPeliculaFail(error)))
          )
      )
    )
  );
}
