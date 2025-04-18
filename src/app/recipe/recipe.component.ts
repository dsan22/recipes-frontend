import { Component, Input } from '@angular/core';
import { Recipe } from '../../types';
import { CapitalizePipe } from '../pipes/capitalize.pipe';

@Component({
  selector: 'app-recipe',
  imports: [CapitalizePipe],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  @Input() recipe!:Recipe
}
