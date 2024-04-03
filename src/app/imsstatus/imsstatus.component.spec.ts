import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImsstatusComponent } from './imsstatus.component';

describe('ImsstatusComponent', () => {
  let component: ImsstatusComponent;
  let fixture: ComponentFixture<ImsstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImsstatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImsstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
