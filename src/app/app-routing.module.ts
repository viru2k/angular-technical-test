import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PeliculaDetailsComponent } from "./pages/pelicula/pelicula-details/pelicula-details.component";
import { PeliculaListComponent } from "./pages/pelicula/pelicula-list/pelicula-list.component";
import { PeliculaItemComponent } from "./pages/pelicula/pelicula-item/pelicula-item.component";
import { CastListComponent } from "./pages/pelicula/cast/cast-list/cast-list.component";

const routes: Routes = [
  { path: "pelicula/list", component: PeliculaListComponent },
  { path: "pelicula/details", component: PeliculaDetailsComponent },
  { path: "pelicula/item", component: PeliculaItemComponent },
  { path: "cast/list", component: CastListComponent },
  { path: "", pathMatch: "full", redirectTo: "pelicula/list" },
  { path: "**", pathMatch: "full", redirectTo: "pelicula/list" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
