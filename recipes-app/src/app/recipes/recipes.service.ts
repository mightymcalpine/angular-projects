import { ShoppingListService } from './../shopping/shopping-list/shopping-list.service';
import { Ingredient } from './../models/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from './../models/recipe.model';

@Injectable()

export class RecipeService {

  // private means you cannot access this property from outside the class, not global then
  private allRecipes: Recipe[] = [
    new Recipe(
      'BLT Sandwich',
      'A light, healthier sandwich',
      'https://upload.wikimedia.org/wikipedia/commons/e/e6/BLT_sandwich_on_toast.jpg',
      [
        new Ingredient('bacon', 4),
        new Ingredient('tomato', 3),
        new Ingredient('lettuce', 2),
      ]
    ),
    new Recipe(
    'Guacamole',
    'fresh and spicy',
    'http://allnutribulletrecipes.com/wp-content/uploads/2017/03/Nutribullet-guacamole.jpg',
    [
      new Ingredient('avocado', 8),
      new Ingredient('lime', 1),
      new Ingredient('seasalt', 1)
    ]
  ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    // this returns us a copy of the array, so that we cannot mess with the original stored here in this service
    return this.allRecipes.slice();
  }

  addIngredientToShopList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(id: number) {
    return this.allRecipes[id];
  }

}
