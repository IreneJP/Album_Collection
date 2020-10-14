import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeAlbumsComponent } from './some-albums.component';

describe('SomeAlbumsComponent', () => {
  let component: SomeAlbumsComponent;
  let fixture: ComponentFixture<SomeAlbumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SomeAlbumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeAlbumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
