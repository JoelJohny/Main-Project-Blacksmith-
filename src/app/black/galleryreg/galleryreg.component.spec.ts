import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryregComponent } from './galleryreg.component';

describe('GalleryregComponent', () => {
  let component: GalleryregComponent;
  let fixture: ComponentFixture<GalleryregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
