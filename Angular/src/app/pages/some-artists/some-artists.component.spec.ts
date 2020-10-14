import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeArtistsComponent } from './some-artists.component';

describe('SomeArtistsComponent', () => {
  let component: SomeArtistsComponent;
  let fixture: ComponentFixture<SomeArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeArtistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
