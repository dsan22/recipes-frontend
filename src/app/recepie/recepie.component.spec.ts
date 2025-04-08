import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepieComponent } from './recepie.component';

describe('RecepieComponent', () => {
  let component: RecepieComponent;
  let fixture: ComponentFixture<RecepieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecepieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
