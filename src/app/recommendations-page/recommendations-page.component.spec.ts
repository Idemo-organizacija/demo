import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationsPageComponent } from './recommendations-page.component';

describe('RecommendationsPageComponent', () => {
  let component: RecommendationsPageComponent;
  let fixture: ComponentFixture<RecommendationsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendationsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommendationsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
