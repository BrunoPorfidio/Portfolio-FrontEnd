import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSkillsEditComponent } from './modal-skills-edit.component';

describe('ModalSkillsEditComponent', () => {
  let component: ModalSkillsEditComponent;
  let fixture: ComponentFixture<ModalSkillsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSkillsEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSkillsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
