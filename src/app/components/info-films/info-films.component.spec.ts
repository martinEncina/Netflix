import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFilmsComponent } from './info-films.component';

describe('InfoFilmsComponent', () => {
  let component: InfoFilmsComponent;
  let fixture: ComponentFixture<InfoFilmsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoFilmsComponent]
    });
    fixture = TestBed.createComponent(InfoFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
