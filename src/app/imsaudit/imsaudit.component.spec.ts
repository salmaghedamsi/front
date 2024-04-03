import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImsauditComponent } from './imsaudit.component';

describe('ImsauditComponent', () => {
  let component: ImsauditComponent;
  let fixture: ComponentFixture<ImsauditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImsauditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImsauditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
