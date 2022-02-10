// Angular
import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";

// Store
import { BasePeliculasFacade } from "../../../store/peliculas.facade";

// Api
import { Pelicula } from "../../../models/Pelicula.model";

@Component({
  selector: "app-pelicula-item",
  templateUrl: "./pelicula-item.component.html",
})
export class PeliculaItemComponent implements OnInit, OnDestroy {
  @Input() itemPelicula: Pelicula;
  constructor(
    private router: Router,
    public peliculasFacade: BasePeliculasFacade
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  editElement(selectedIitem: Pelicula): void {
    this.peliculasFacade.updateCurrentPelicula(selectedIitem);
    this.router.navigate(["pelicula/details"]).then(
      (nav) => {
        console.log(nav);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteElement(selectedIitem: Pelicula): void {
    this.peliculasFacade.deletePelicula(selectedIitem);
  }
}
