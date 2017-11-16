import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../../models/ingredient.model';
import { Subscription } from 'rxjs/Subscription';

import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  allIngredients: Ingredient[]
  private subscription: Subscription

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    // we do this in ngOnInit because we are initializing this property
    // good practive to do such things in this lifecycle hook
    this.allIngredients = this.shoppingListService.getIngredients();
    // this is for everytime we add an ingredient, we are listening, subscribe,to this
    // property that gives us and updated slice (copy) of our ingredients array
    this.subscription = this.shoppingListService.ingredientChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.allIngredients = ingredients;
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
