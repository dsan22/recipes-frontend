import { Component, Input, } from '@angular/core';
import { RecipeDetails } from '../../types';


@Component({
  selector: 'app-recipe-details',
  imports: [],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {
  @Input() recipe!:RecipeDetails

}
