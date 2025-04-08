import { Component } from '@angular/core';
import { RecepiesService } from '../services/recepies.service';
import { Recepie } from '../../types';
import { RecepieComponent } from '../recepie/recepie.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recepies',
  imports: [RecepieComponent,CommonModule],
  templateUrl: './recepies.component.html',
  styleUrl: './recepies.component.css'
})
export class RecepiesComponent {
  constructor(private recepiesService: RecepiesService) { }

  recepies:Recepie[] = [];
  ngOnInit() {
    this.recepiesService.getAllRecepies().subscribe(recepies => this.recepies = recepies.data);
   }  
}
