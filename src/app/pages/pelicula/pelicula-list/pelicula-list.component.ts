// Angular
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";

// Ngrx
import { BasePeliculasFacade } from "../../../store/peliculas.facade";

// Rxjs
import { filter } from "rxjs/operators";

//Api
import { Pelicula } from "../../../models/Pelicula.model";

@Component({
  selector: "app-pelicula-list",
  templateUrl: "./pelicula-list.component.html",
})
export class PeliculaListComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    public peliculasFacade: BasePeliculasFacade
  ) {}

  ngOnInit(): void {
    this.setPeliculasSubscrition();
    this.peliculasFacade.loadViewData();
  }

  ngOnDestroy(): void {}

  agregarPelicula(): void {
    this.router.navigate(["pelicula/details"]).then(
      (nav) => {
        console.log(nav);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // Only for testing an operator to kill hanst been added, should be take(1) or takeUntil($destroyed)
  private setPeliculasSubscrition(): void {
    this.peliculasFacade.peliculas$
      .pipe(filter((peliculas) => !!peliculas))
      .subscribe((peliculas: Pelicula[]) => {
        console.log(peliculas);
      });
  }
}
