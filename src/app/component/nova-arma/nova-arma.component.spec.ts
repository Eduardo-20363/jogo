import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaArmaComponent } from './nova-arma.component';

describe('NovaArmaComponent', () => {
  let component: NovaArmaComponent;
  let fixture: ComponentFixture<NovaArmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaArmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaArmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
