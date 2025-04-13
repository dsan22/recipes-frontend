import { Component, Input } from '@angular/core';
import { Recepie } from '../../types';
import { CapitalizePipe } from '../pipes/capitalize.pipe';

@Component({
  selector: 'app-recepie',
  imports: [CapitalizePipe],
  templateUrl: './recepie.component.html',
  styleUrl: './recepie.component.css'
})
export class RecepieComponent {
  @Input() recepie!:Recepie
}
