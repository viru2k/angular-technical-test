// Angular
import { Injectable } from "@angular/core";

// Rxjs
import { Observable } from "rxjs";
import { take } from "rxjs/operators";

// Ngrx
import { select, Store } from "@ngrx/store";
import { Actions } from "@ngrx/effects";

// Store
import { PeliculasActions } from "../store/actions/action-types";
import { PeliculasState } from "../store/reducers/reducer-map";
import { PeliculasFormState } from "../store/reducers/peliculas.reducers";

import * as fromSelectors from "../store/selectors/pelicula.selectors";
import { Pelicula } from "../models/Pelicula.model";
import { Persona } from "../models/Persona.model";

/**
 *  This file is created to do as is name said, a nexus from the store and view
 *  for handle observables and methods which reacts with user actions
 * **/

@Injectable({ providedIn: "root" })
export class BasePeliculasFacade {
  // DATA VIEW OBSERVABLES
  isViewReady$: Observable<boolean> = this.parentStore.pipe(
    select(fromSelectors.isViewReady)
  );

  peliculas$: Observable<Pelicula[]> = this.parentStore.pipe(
    select(fromSelectors.getPeliculas)
  );

  peliculaList$: Observable<Pelicula[]> = this.parentStore.pipe(
    select(fromSelectors.getPeliculaList)
  );

  personas$: Observable<Persona[]> = this.parentStore.pipe(
    select(fromSelectors.getPersonas)
  );
  castPrincipal$: Observable<Persona[]> = this.parentStore.pipe(
    select(fromSelectors.getCastPrincipal)
  );

  // FORM VIEW OBSERVABLES
  formData$: Observable<PeliculasFormState> = this.parentStore.pipe(
    select(fromSelectors.getPeliculasFormState)
  );

  selectedPelicula$: Observable<Pelicula> = this.parentStore.pipe(
    select(fromSelectors.getSelectedPelicula)
  );

  selectedPersona$: Observable<Persona> = this.parentStore.pipe(
    select(fromSelectors.getSelectedPersona)
  );

  constructor(private parentStore: Store<PeliculasState>) {}

  loadViewData(): void {
    this.isViewReady$.pipe(take(1)).subscribe((isReady: boolean) => {
      if (isReady) {
        return;
      }
      this.parentStore.dispatch(PeliculasActions.getPeliculas());
      this.parentStore.dispatch(PeliculasActions.getPersonas());
    });
  }

  updateCurrentPelicula(selectedPelicula: Pelicula): void {
    this.parentStore.dispatch(
      PeliculasActions.updateForm({ selectedPelicula })
    );
  }

  setCastPrincipal(pelicula: Pelicula, persona: Persona): void {
    this.parentStore.dispatch(
      PeliculasActions.setSelectedCast({ persona, pelicula })
    );
  }

  deleteCastPrincipal(pelicula: Pelicula, persona: Persona): void {
    this.parentStore.dispatch(
      PeliculasActions.deleteSelectedCast({ persona, pelicula })
    );
  }

  /**  Not used because of out time
   *   This methos are used to  handle a reactive form, picking up any change made at the form
   *   and saving at the store
   * **/
  updatetitulo(titulo: string): void {
    this.parentStore.dispatch(PeliculasActions.updateForm({ titulo }));
  }

  updateFechaEstreno(fechaEstreno: string): void {
    this.parentStore.dispatch(PeliculasActions.updateForm({ fechaEstreno }));
  }

  updateRecaudacion(recaudacion: number): void {
    this.parentStore.dispatch(PeliculasActions.updateForm({ recaudacion }));
  }

  updateDireccion(direccion: string): void {
    this.parentStore.dispatch(PeliculasActions.updateForm({ direccion }));
  }

  updateGenero(genero: string): void {
    this.parentStore.dispatch(PeliculasActions.updateForm({ genero }));
  }

  updateProductora(productora: string): void {
    this.parentStore.dispatch(PeliculasActions.updateForm({ productora }));
  }

  updatecastPrincipal(selectedPelicula: Pelicula): void {
    const castPrincipal = selectedPelicula.castPrincipal;
    this.parentStore.dispatch(PeliculasActions.updateForm({ castPrincipal }));
  }

  setPelicula(pelicula: Pelicula): void {
    this.parentStore.dispatch(PeliculasActions.setPelicula({ pelicula }));
  }

  updatePelicula(pelicula: Pelicula): void {
    this.parentStore.dispatch(PeliculasActions.updatePelicula({ pelicula }));
  }

  deletePelicula(pelicula: Pelicula): void {
    this.parentStore.dispatch(PeliculasActions.deletePelicula({ pelicula }));
  }

  clearPeliculas(): void {
    this.parentStore.dispatch(PeliculasActions.clearData());
  }

  clearPeliculasForm(): void {
    this.parentStore.dispatch(PeliculasActions.clearForm());
  }

  clearCurrentPeliculaForm(): void {
    this.parentStore.dispatch(PeliculasActions.clearCurrentPeliculaForm());
  }
}
