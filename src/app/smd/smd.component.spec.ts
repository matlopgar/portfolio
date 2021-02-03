import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmdComponent } from './smd.component';

describe('SmdComponent', () => {
  let component: SmdComponent;
  let fixture: ComponentFixture<SmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
