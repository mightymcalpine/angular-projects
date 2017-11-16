import { Ingredient } from './../../models/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {

  ingredientChanged = new Subject<Ingredient[]>();

  allIngredients: Ingredient[] = [
    new Ingredient('bacon', 2),
    new Ingredient('tomato', 3)
  ];

  getIngredients() {
    return this.allIngredients.slice();
  }

// as is, if I call these addIngredients methods multiple times, it will add duplicates of the ingredients
// need to build a pipe to combine duplicate ingredients and add their respective amounts

  addIngredient(ingredient: Ingredient) {
    this.allIngredients.push(ingredient);
    this.ingredientChanged.next(this.allIngredients.slice());
  }

  addIngredients(ingredient: Ingredient[]) {
    this.allIngredients.push(...ingredient);
    this.ingredientChanged.next(this.allIngredients.slice());
  }
}
