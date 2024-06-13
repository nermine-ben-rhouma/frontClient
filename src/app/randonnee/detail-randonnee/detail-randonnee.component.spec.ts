import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRandonneeComponent } from './detail-randonnee.component';

describe('DetailRandonneeComponent', () => {
  let component: DetailRandonneeComponent;
  let fixture: ComponentFixture<DetailRandonneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRandonneeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailRandonneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
