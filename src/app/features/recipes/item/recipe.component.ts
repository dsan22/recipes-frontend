import { Component, Input } from '@angular/core';
import { Recipe } from '../../../../types';

import { Router } from '@angular/router';
import { CapitalizePipe } from '../../../shared/pipes/capitalize.pipe';

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
