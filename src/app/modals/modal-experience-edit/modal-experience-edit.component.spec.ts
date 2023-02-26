import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExperienceEditComponent } from './modal-experience-edit.component';

describe('ModalExperienceEditComponent', () => {
  let component: ModalExperienceEditComponent;
  let fixture: ComponentFixture<ModalExperienceEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalExperienceEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalExperienceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
