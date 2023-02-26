import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProyectsEditComponent } from './modal-proyects-edit.component';

describe('ModalProyectsEditComponent', () => {
  let component: ModalProyectsEditComponent;
  let fixture: ComponentFixture<ModalProyectsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalProyectsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalProyectsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
