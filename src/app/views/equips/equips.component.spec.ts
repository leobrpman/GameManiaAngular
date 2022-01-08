import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipsComponent } from './equips.component';

describe('EquipsComponent', () => {
  let component: EquipsComponent;
  let fixture: ComponentFixture<EquipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
