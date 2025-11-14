import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-image-form-modal',
  imports: [ FormsModule],
  templateUrl: './recipe-image-form-modal.component.html',
  styleUrl: './recipe-image-form-modal.component.css'
})
export class RecipeImageFormModalComponent {
  @Output() close = new EventEmitter();
  @Output() save = new EventEmitter<{ image: File | null; isCover: boolean }>();

  selectedImage: File | null = null;
  isCover = false;

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.selectedImage = file ? file : null;
  }

  onSave() {
    this.save.emit({ image: this.selectedImage, isCover: this.isCover });
    this.close.emit();
  }

  onCancel() {
    this.close.emit();
  }
}
