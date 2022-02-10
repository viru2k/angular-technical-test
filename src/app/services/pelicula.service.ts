// Angular
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// RxJs
import { Observable, of } from "rxjs";
import { take } from "rxjs/operators";

//Store
import { BasePeliculasFacade } from "../store/peliculas.facade";

//Api
import { Pelicula } from "../models/Pelicula.model";
import { Persona } from "../models/Persona.model";

@Injectable({
  providedIn: "root",
})
export class PeliculaService {
  private url: string;

  constructor(
    public http: HttpClient,
    private peliculasFacade: BasePeliculasFacade
  ) {}

  getPeliculas(): Observable<Pelicula[]> {
    return of(peliculasArray);
  }

  getActores(): Observable<Persona[]> {
    return of(personaArray);
  }

  // Not used for this feature -- only to  show how to call an http request
  getPeliculaById(id: number): Observable<Pelicula> {
    return this.http.get<Pelicula>(this.url + "pelicula/id" + id);
  }

  postPelicula(pelicula: Pelicula): Observable<Pelicula[]> {
    let newArray: Pelicula[] = [];
    this.peliculasFacade.peliculaList$
      .pipe(take(1))
      .subscribe((peliculaList: Pelicula[]) => {
        newArray.push(...peliculaList, pelicula);
      });
    return of(newArray);
  }

  putPelicula(pelicula: Pelicula): Observable<Pelicula[]> {
    let newArray: Pelicula[] = [];
    this.peliculasFacade.peliculaList$
      .pipe(take(1))
      .subscribe((peliculaList: Pelicula[]) => {
        newArray.push(...peliculaList);
        let itemIndex = peliculaList.findIndex(
          (item) => item.id == pelicula.id
        );
        newArray[itemIndex] = pelicula;
      });

    return of(newArray);
  }

  deletePelicula(pelicula: Pelicula): Observable<Pelicula[]> {
    let newArray: Pelicula[] = [];
    let itemIndex = 0;
    this.peliculasFacade.peliculaList$
      .pipe(take(1))
      .subscribe((peliculaList: Pelicula[]) => {
        newArray.push(...peliculaList);
        itemIndex = peliculaList.findIndex((item) => item.id == pelicula.id);

        newArray[itemIndex] = pelicula;
      });

    return of([
      ...newArray.slice(0, itemIndex),
      ...newArray.slice(itemIndex + 1),
    ]);
  }

  getCast(pelicula: Pelicula): Observable<Persona[]> {
    let newArray: Persona[] = [];
    this.peliculasFacade.peliculaList$
      .pipe(take(1))
      .subscribe((peliculaList: Pelicula[]) => {
        newArray.push(...peliculaList["castPrincipal"]);
        let itemIndex = peliculaList.findIndex(
          (item) => item.id == pelicula.id
        );
      });

    return of(newArray);
  }

  // PENDING TO IMPLEMENT
  postSelectedCast(
    persona: Persona,
    pelicula: Pelicula
  ): Observable<Pelicula[]> {
    let newArrayPelicula: Pelicula[] = [];
    let newArrayCast: Persona[] = [];
    this.peliculasFacade.peliculaList$
      .pipe(take(1))
      .subscribe((peliculaList: Pelicula[]) => {
        newArrayPelicula.push(...peliculaList);
        let itemIndex = newArrayPelicula.findIndex(
          (item) => item.id == pelicula.id
        );
        newArrayCast.push(persona);
        newArrayPelicula[itemIndex]["castPrincipal"].push(...newArrayCast);
      });
    return of(newArrayPelicula);
  }

  deleteSelectedCast(
    persona: Persona,
    pelicula: Pelicula
  ): Observable<Pelicula[]> {
    let newArrayPelicula: Pelicula[] = [];
    let newArrayCast: Persona[] = [];
    this.peliculasFacade.peliculaList$
      .pipe(take(1))
      .subscribe((peliculaList: Pelicula[]) => {
        newArrayPelicula.push(...peliculaList);
        let itemIndex = newArrayPelicula.findIndex(
          (item) => item.id == pelicula.id
        );
        newArrayCast.push(persona);
        newArrayPelicula[itemIndex]["castPrincipal"].push(...newArrayCast);
      });
    return of(newArrayPelicula);
  }
}

// ARRAY OF ELEMENTS, JSON FILE NOT USED BECAUSE OF LACK OF TIME
export const peliculasArray: any = [
  {
    _id: "62013ca4b8b3da8e513b3098",
    titulo: "DEMINIMUM",
    fechaEstreno: "2020-08-08",
    recaudacion: 97501821,
    direccion: "Lesley Donovan",
    genero: "Ciencia Ficción",
    productora: "Columbia Picture",
    castPrincipal: [
      {
        id: 0,
        apellidoNombre: "Molina Kline",
      },
      {
        id: 1,
        apellidoNombre: "Graham Sanford",
      },
      {
        id: 2,
        apellidoNombre: "Woodward Dunlap",
      },
    ],
  },
  {
    _id: "62013ca40571fbcc6ea83eb3",
    titulo: "CHILLIUM",
    fechaEstreno: "2012-03-29",
    recaudacion: 14992864,
    direccion: "Margaret Austin",
    genero: "Acción",
    productora: "Columbia Picture",
    castPrincipal: [
      {
        id: 0,
        apellidoNombre: "Abby Harding",
      },
      {
        id: 1,
        apellidoNombre: "Caldwell Maynard",
      },
      {
        id: 2,
        apellidoNombre: "Le Hansen",
      },
      {
        id: 3,
        apellidoNombre: "Delores Goodwin",
      },
      {
        id: 4,
        apellidoNombre: "Fitzpatrick Bridges",
      },
      {
        id: 5,
        apellidoNombre: "Wall Brewer",
      },
      {
        id: 6,
        apellidoNombre: "Hatfield Valdez",
      },
    ],
  },
  {
    _id: "62013ca4ef775177ad34065a",
    titulo: "CYCLONICA",
    fechaEstreno: "2004-02-08",
    recaudacion: 72089713,
    direccion: "Diana Logan",
    genero: "Suspenso",
    productora: "Warner Bros",
    castPrincipal: [
      {
        id: 0,
        apellidoNombre: "Bowers Pratt",
      },
      {
        id: 1,
        apellidoNombre: "Rochelle Potts",
      },
      {
        id: 2,
        apellidoNombre: "Walter Glass",
      },
    ],
  },
  {
    _id: "62013ca43aefbc01d14faa4c",
    titulo: "ACCUPHARM",
    fechaEstreno: "2001-04-21",
    recaudacion: 74234216,
    direccion: "Odessa Walton",
    genero: "Terror",
    productora: "Paramount Pictures",
    castPrincipal: [
      {
        id: 0,
        apellidoNombre: "Bird Butler",
      },
      {
        id: 1,
        apellidoNombre: "Leslie Mullen",
      },
      {
        id: 2,
        apellidoNombre: "Millicent Strickland",
      },
    ],
  },
  {
    _id: "62013ca48733979c6d65a09b",
    titulo: "GORGANIC",
    fechaEstreno: "2006-07-29",
    recaudacion: 35762427,
    direccion: "Kendra Hardy",
    genero: "Terror",
    productora: "Warner Bros",
    castPrincipal: [
      {
        id: 0,
        apellidoNombre: "Jordan Bray",
      },
      {
        id: 1,
        apellidoNombre: "Rush Sears",
      },
      {
        id: 2,
        apellidoNombre: "Josephine Coffey",
      },
      {
        id: 3,
        apellidoNombre: "Everett Moore",
      },
    ],
  },
  {
    _id: "62013ca4bb9681d8fc340740",
    titulo: "ZYTRAX",
    fechaEstreno: "2002-03-29",
    recaudacion: 9509257,
    direccion: "Newman Dunn",
    genero: "Ciencia Ficción",
    productora: "Paramount Pictures",
    castPrincipal: [
      {
        id: 0,
        apellidoNombre: "Butler Mcfarland",
      },
      {
        id: 1,
        apellidoNombre: "Goff Romero",
      },
      {
        id: 2,
        apellidoNombre: "Wilcox Gordon",
      },
      {
        id: 3,
        apellidoNombre: "Bernadette Acevedo",
      },
      {
        id: 4,
        apellidoNombre: "Melva Lowe",
      },
    ],
  },
  {
    _id: "62013ca426605e2f052331e6",
    titulo: "ZOSIS",
    fechaEstreno: "2007-06-23",
    recaudacion: 38738399,
    direccion: "Hardin Newman",
    genero: "Suspenso",
    productora: "Warner Bros",
    castPrincipal: [
      {
        id: 0,
        apellidoNombre: "Alison Malone",
      },
      {
        id: 1,
        apellidoNombre: "Hays Huber",
      },
      {
        id: 2,
        apellidoNombre: "Roseann Reyes",
      },
      {
        id: 3,
        apellidoNombre: "Hawkins Gentry",
      },
      {
        id: 4,
        apellidoNombre: "Lowery Todd",
      },
      {
        id: 5,
        apellidoNombre: "Estella Hester",
      },
    ],
  },
  {
    _id: "62013ca4cbe15620cf5b597d",
    titulo: "ZAPHIRE",
    fechaEstreno: "2006-06-13",
    recaudacion: 16839631,
    direccion: "Vilma Fernandez",
    genero: "Ciencia Ficción",
    productora: "Warner Bros",
    castPrincipal: [
      {
        id: 0,
        apellidoNombre: "Spears Rowland",
      },
      {
        id: 1,
        apellidoNombre: "Dana Adams",
      },
      {
        id: 2,
        apellidoNombre: "Gwen Ayers",
      },
    ],
  },
  {
    _id: "62013ca4a030b18cad54a45c",
    titulo: "ECRAZE",
    fechaEstreno: "2012-02-10",
    recaudacion: 16036493,
    direccion: "Holmes Love",
    genero: "Terror",
    productora: "Paramount Pictures",
    castPrincipal: [
      {
        id: 0,
        apellidoNombre: "Langley Hendricks",
      },
      {
        id: 1,
        apellidoNombre: "Kaye Buckner",
      },
      {
        id: 2,
        apellidoNombre: "Pennington Mckenzie",
      },
      {
        id: 3,
        apellidoNombre: "Kerri Lane",
      },
      {
        id: 4,
        apellidoNombre: "Nancy Bowers",
      },
      {
        id: 5,
        apellidoNombre: "Lacey Peck",
      },
      {
        id: 6,
        apellidoNombre: "Maryann Shields",
      },
    ],
  },
];

export const personaArray: any = [
  {
    id: 0,
    apellidoNombre: "Elise Miranda",
  },
  {
    id: 1,
    apellidoNombre: "Skinner Campos",
  },
  {
    id: 2,
    apellidoNombre: "Joyce Barlow",
  },
  {
    id: 3,
    apellidoNombre: "Juliana Frost",
  },
  {
    id: 4,
    apellidoNombre: "Ellen Brennan",
  },
  {
    id: 5,
    apellidoNombre: "Salinas Todd",
  },
  {
    id: 6,
    apellidoNombre: "Mamie Alvarez",
  },
  {
    id: 7,
    apellidoNombre: "Summers Harding",
  },
  {
    id: 8,
    apellidoNombre: "Karin Combs",
  },
  {
    id: 9,
    apellidoNombre: "Petersen Wilcox",
  },
  {
    id: 10,
    apellidoNombre: "Carmela Head",
  },
];
