// Angular
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Store
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { PeliculasStoreModule } from "./store/peliculas.module";

// Material
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";

// Components
import { AppComponent } from "./app.component";
import { PeliculaItemComponent } from "./pages/pelicula/pelicula-item/pelicula-item.component";
import { PeliculaDetailsComponent } from "./pages/pelicula/pelicula-details/pelicula-details.component";
import { PeliculaListComponent } from "./pages/pelicula/pelicula-list/pelicula-list.component";
import { CastListComponent } from "./pages/pelicula/cast/cast-list/cast-list.component";

@NgModule({
  declarations: [
    AppComponent,
    PeliculaItemComponent,
    PeliculaDetailsComponent,
    PeliculaListComponent,
    CastListComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // material components
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule,
    MatListModule,

    //Store
    PeliculasStoreModule,
    /** This comment is for information only
     *  PeliculasStoreModule handle  the store related for peliculas
     *  removing  not necessary imports and splitting ngrx in small pieces
     *  binded by this module and a file  called *.facade.ts which is the main
     *  in every feature and is who is as a bridge between view and store
     *  **/
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 30,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/** !!!IMPORTANT, IN ORDER TO IMPLEMENT CLEAN CODE AND GOOD PRACTICES ALL REDUNDANT COMMENTS HAS BEEN REMOVED
 * LETTING ONLY WHO IS  RELEVANT  TO BE NOTED IN A FAST READ.
 * THE CODE SHOULD BE CLEAR ENOUGHT TO TALK BY ITSELF **/
