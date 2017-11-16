import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../../models/ingredient.model';

import { ShoppingListService } from './../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIng = new Ingredient(ingName, ingAmount);
    // this.ingredientAdded.emit(newIng);
    this.shoppingListService.addIngredient(newIng);
  }

  preventDefault() {
    event.preventDefault();
  }

}
