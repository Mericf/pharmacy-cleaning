import { Drug } from "./pharmacy";

export const drugs = [
  new Drug("Doliprane", 20, 30),
  new Drug("Herbal Tea", 10, 5),
  new Drug("Fervex", 12, 35),
  new Drug("Magic Pill", 15, 40),
];

export const drugsWithDafalgan = [...drugs, new Drug("Dafalgan", 10, 5)];
