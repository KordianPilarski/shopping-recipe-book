import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 3),
    new Ingredient('Cabbage', 1),
  ];

  addIngredient(ingredient: Ingredient) {
    console.log('ingredient', ingredient);
    this.ingredients.push(ingredient);
  }
}
