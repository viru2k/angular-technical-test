// Angular
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

//RxJs
import { take } from "rxjs/operators";

// Api
import { Pelicula } from "../../../../models/Pelicula.model";
import { Persona } from "../../../../models/Persona.model";
// Store
import { BasePeliculasFacade } from "../../../../store/peliculas.facade";

@Component({
  selector: "app-cast-list",
  templateUrl: "./cast-list.component.html",
})
export class CastListComponent implements OnInit {
  currentActor: Persona;
  constructor(
    private router: Router,
    public peliculasFacade: BasePeliculasFacade
  ) {}

  ngOnInit(): void {}
  setCurrentActor(item: Persona): void {
    this.currentActor = item;
  }
  navigateToHome(): void {
    this.peliculasFacade.clearCurrentPeliculaForm();
    //this.peliculasFacade.clearPeliculasForm(); --> a currentSelected action should be implemented
    this.router.navigate(["pelicula/list"]);
  }
  agregarActor(): void {
    console.log(this.currentActor);
    this.peliculasFacade.selectedPelicula$
      .pipe(take(1))
      .subscribe((pelicula: Pelicula) => {
        this.peliculasFacade.setCastPrincipal(pelicula, this.currentActor);
      });
  }
  removeActor(): void {
    console.log(this.currentActor);
    console.log(this.currentActor);
    this.peliculasFacade.selectedPelicula$
      .pipe(take(1))
      .subscribe((pelicula: Pelicula) => {
        this.peliculasFacade.deleteCastPrincipal(pelicula, this.currentActor);
      });
  }
}
