import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalProyectsComponent } from './modal-proyects.component';

describe('ModalProyectsComponent', () => {
  let component: ModalProyectsComponent;
  let fixture: ComponentFixture<ModalProyectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalProyectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalProyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
