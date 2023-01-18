import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEducationComponent } from './modal-education.component';

describe('ModalEducationComponent', () => {
  let component: ModalEducationComponent;
  let fixture: ComponentFixture<ModalEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
