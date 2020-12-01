import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocCitasComponent } from './doc-citas.component';

describe('DocCitasComponent', () => {
  let component: DocCitasComponent;
  let fixture: ComponentFixture<DocCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocCitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
