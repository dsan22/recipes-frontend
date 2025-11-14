import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeImageFormModalComponent } from './recipe-image-form-modal.component';

describe('RecipeImageFormModalComponent', () => {
  let component: RecipeImageFormModalComponent;
  let fixture: ComponentFixture<RecipeImageFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeImageFormModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeImageFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
