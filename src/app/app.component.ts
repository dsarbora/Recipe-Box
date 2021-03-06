import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Sugar Cookies', ['flour', 'sugar', 'eggs', 'milk', 'butter'], ['mix ingredients', 'bake at 400 degrees for 10 minutes'], 'allrecipes', 'hard'),
    new Recipe('Steak', ['salt', 'pepper', 'sirloin steak'], ['heat oil in pan', 'put steaks in heated pan', 'cook each side for 5 minutes'], 'allrecipes', 'medium'),
    new Recipe('Oatmeal', ['oats', 'milk', 'sugar(optional)'], ['heat milk in pan', 'mix in oats', 'add sugar if desired'], 'allrecipes', 'easy')
  ];

  selectedRecipe: Recipe = null;
  editRecipe(clickedRecipe) {
    this.selectedRecipe=clickedRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }

  difficultyColor(currentRecipe) {
    if (currentRecipe.difficulty === 'easy') {
      return 'bg-info';
    } else if (currentRecipe.difficulty === 'medium'){
      return 'bg-warning';
    } else {
      return 'bg-danger';
    }
  }

  addRecipe() {
    let title: string = document.getElementById("recipeName").value;
    document.getElementById("recipeName").value = "";
    let recipe: Recipe = new Recipe(title);
    this.recipes.push(recipe);
    console.log(recipe.title);


  }
}
