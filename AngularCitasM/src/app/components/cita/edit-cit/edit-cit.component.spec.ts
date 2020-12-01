import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCitComponent } from './edit-cit.component';

describe('EditCitComponent', () => {
  let component: EditCitComponent;
  let fixture: ComponentFixture<EditCitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
