import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPerComponent } from './admin-per.component';

describe('AdminPerComponent', () => {
  let component: AdminPerComponent;
  let fixture: ComponentFixture<AdminPerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
