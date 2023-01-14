import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAboutmeComponent } from './modal-aboutme.component';

describe('ModalAboutmeComponent', () => {
  let component: ModalAboutmeComponent;
  let fixture: ComponentFixture<ModalAboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAboutmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
