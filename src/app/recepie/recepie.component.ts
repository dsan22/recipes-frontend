import { Component, Input } from '@angular/core';
import { Recepie } from '../../types';

@Component({
  selector: 'app-recepie',
  imports: [],
  templateUrl: './recepie.component.html',
  styleUrl: './recepie.component.css'
})
export class RecepieComponent {
  @Input() recepie!:Recepie
}
