import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSkillsComponent } from './modal-skills.component';

describe('ModalSkillsComponent', () => {
  let component: ModalSkillsComponent;
  let fixture: ComponentFixture<ModalSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
