// Angular
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

// Store
import { BasePeliculasFacade } from "../../../store/peliculas.facade";

// RxJs
import { take } from "rxjs/operators";

// Api
import { Pelicula } from "../../../models/Pelicula.model";

// 3rd Party
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "app-pelicula-details",
  templateUrl: "./pelicula-details.component.html",
})
export class PeliculaDetailsComponent implements OnInit, OnDestroy {
  peliculaForm: FormGroup;
  esNuevo: boolean = false;

  constructor(
    private router: Router,
    public peliculasFacade: BasePeliculasFacade
  ) {
    this.peliculaForm = new FormGroup({
      id: new FormControl(""),
      titulo: new FormControl("", Validators.required),
      fechaEstreno: new FormControl("", Validators.required),
      recaudacion: new FormControl(0, Validators.required),
      direccion: new FormControl("", Validators.required),
      genero: new FormControl("", Validators.required),
      productora: new FormControl(""),
      castPrincipal: new FormControl([]),
    });
  }

  ngOnInit(): void {
    this.setPeliculasSubscrition();
  }

  ngOnDestroy(): void {}

  guardar(): void {
    if (this.esNuevo) {
      // set am id to new pelicula object only for  test reasons
      this.peliculaForm.patchValue({
        id: uuidv4(),
      });
      this.peliculasFacade.setPelicula(this.peliculaForm.value);
    } else {
      this.peliculasFacade.updatePelicula(this.peliculaForm.value);
    }
    this.navigateToHome();
  }

  navigateToHome(): void {
    this.peliculasFacade.clearCurrentPeliculaForm();

    this.router.navigate(["pelicula/list"]);
  }

  editarCast(): void {
    this.peliculasFacade.selectedPelicula$
      .pipe(take(1))
      .subscribe((pelicula: Pelicula) => {
        this.peliculasFacade.updatecastPrincipal(pelicula);
        this.router.navigate(["cast/list"]);
      });
  }

  agregarCast(): void {
    this.router.navigate(["cast/list"]);
  }

  private setPeliculasSubscrition(): void {
    this.peliculasFacade.selectedPelicula$
      .pipe(take(1))
      .subscribe((pelicula: Pelicula) => {
        if (!!pelicula) {
          this.peliculaForm.patchValue({
            id: pelicula.id,
            titulo: pelicula.titulo,
            fechaEstreno: pelicula.fechaEstreno,
            recaudacion: pelicula.recaudacion,
            direccion: pelicula.direccion,
            genero: pelicula.genero,
            productora: pelicula.productora,
            castPrincipal: [],
          });
        } else {
          this.esNuevo = true;
        }
      });
  }
}
