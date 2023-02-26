import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAboutmeEditComponent } from './modal-aboutme-edit.component';

describe('ModalAboutmeEditComponent', () => {
  let component: ModalAboutmeEditComponent;
  let fixture: ComponentFixture<ModalAboutmeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAboutmeEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAboutmeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
