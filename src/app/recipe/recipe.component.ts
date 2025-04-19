import { Component, Input } from '@angular/core';
import { Recipe } from '../../types';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe',
  imports: [CapitalizePipe],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {

  constructor(private router: Router) { }

  @Input() recipe!:Recipe

  showDetails(id: number) {
    this.router.navigate(['recipes', id]);  
  }


}
