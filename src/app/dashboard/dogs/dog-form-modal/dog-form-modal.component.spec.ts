import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogFormModalComponent } from './dog-form-modal.component';

describe('DogFormModalComponent', () => {
  let component: DogFormModalComponent;
  let fixture: ComponentFixture<DogFormModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DogFormModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DogFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
