import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaPersonagemComponent } from './nova-personagem.component';

describe('NovaPersonagemComponent', () => {
  let component: NovaPersonagemComponent;
  let fixture: ComponentFixture<NovaPersonagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaPersonagemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaPersonagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
