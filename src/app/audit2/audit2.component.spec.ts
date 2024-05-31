import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Audit2Component } from './audit2.component';

describe('Audit2Component', () => {
  let component: Audit2Component;
  let fixture: ComponentFixture<Audit2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Audit2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Audit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
