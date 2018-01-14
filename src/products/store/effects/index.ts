import { PizzasEffects } from "./pizzas.effects";
import { ToppingsEffects } from "./toppings.effects";

// we maintain everythin in this one file
export const effects: any[] = [PizzasEffects, ToppingsEffects];

export * from "./pizzas.effects";
export * from "./toppings.effects";
