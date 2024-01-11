import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe 1',
      'A description of test recipe',
      'https://www.southernliving.com/thmb/j-l5onbCWgjwaCjtheJfIUqpP9E=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20220406_SL_Southern-Style-Collard-Greens_Beauty_1605-9df766d6d96a4d00aeb240165d7a0669.jpg'
    ),
    new Recipe(
      'A test Recipe 2',
      'A description of test recipe',
      'https://www.southernliving.com/thmb/j-l5onbCWgjwaCjtheJfIUqpP9E=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20220406_SL_Southern-Style-Collard-Greens_Beauty_1605-9df766d6d96a4d00aeb240165d7a0669.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
