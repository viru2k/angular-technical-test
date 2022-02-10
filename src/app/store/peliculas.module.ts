// Angular
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

// Ngrx
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

// Store
import { PeliculasEffects } from "./effects/peliculas.effects";
import { PeliculasReducers } from "./reducers/reducer-map";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature("peliculas", PeliculasReducers),
    EffectsModule.forFeature([PeliculasEffects]),
  ],
  providers: [],
})
export class PeliculasStoreModule {}
