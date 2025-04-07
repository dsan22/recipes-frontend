import { Component } from '@angular/core';
import { RecepiesService } from '../services/recepies.service';

@Component({
  selector: 'app-recepies',
  imports: [],
  templateUrl: './recepies.component.html',
  styleUrl: './recepies.component.css'
})
export class RecepiesComponent {
  constructor(private recepiesService: RecepiesService) { }

  ngOnInit() {
    this.recepiesService.getAllRecepies().subscribe(recepies => console.log(recepies.data));
   }  
}
