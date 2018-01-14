import { Injectable } from "@angular/core";

import { Effect, Actions } from "@ngrx/effects";
import { switchMap } from "rxjs/operators/switchMap";
import { map } from "rxjs/operators";
import { catchError } from "rxjs/operators/catchError";
import { of } from "rxjs/observable/of";

import * as pizzaActions from "../actions/pizzas.action";

import * as fromServices from "../../services";

@Injectable()
export class PizzasEffects {
  constructor(
    private actions$: Actions,
    private pizzaService: fromServices.PizzasService
  ) {}

  @Effect()
  loadPizzas$ = this.actions$.ofType(pizzaActions.LOAD_PIZZAS).pipe(
    switchMap(() => {
      return this.pizzaService
        .getPizzas()
        .pipe(
          map(pizzas => new pizzaActions.LoadPizzasSuccess(pizzas)),
          catchError(error => of(new pizzaActions.LoadPizzasFail(error)))
        );
    })
  );
}
