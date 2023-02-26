import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEducationEditComponent } from './modal-education-edit.component';

describe('ModalEducationEditComponent', () => {
  let component: ModalEducationEditComponent;
  let fixture: ComponentFixture<ModalEducationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEducationEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEducationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
