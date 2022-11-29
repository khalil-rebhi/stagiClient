import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliothequessComponent } from './bibliothequess.component';

describe('BibliothequessComponent', () => {
  let component: BibliothequessComponent;
  let fixture: ComponentFixture<BibliothequessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliothequessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BibliothequessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
