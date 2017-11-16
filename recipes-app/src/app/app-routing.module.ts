import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesEditComponent } from './recipes/recipes-edit/recipes-edit.component';
import { ShoppingListEditComponent } from './shopping/shopping-list/shopping-list-edit/shopping-list-edit.component';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipesEditComponent},
    { path: ':id', component: RecipeDetailsComponent },
    { path: ':id/edit', component: RecipesEditComponent}
    // { path: ':list', component: RecipesListComponent, children: [
    //   { path: ':id/:item', component: RecipeItemComponent }
    // ] },
    // { path: ':id/:details', component: RecipeDetailsComponent }
  ] },
  { path: 'shopping-list', component: ShoppingListComponent, children: [
    { path: ':id/:edit', component: ShoppingListEditComponent }
  ] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
