import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsShowcaseComponent } from './projects-showcase.component';

describe('ProjectsShowcaseComponent', () => {
  let component: ProjectsShowcaseComponent;
  let fixture: ComponentFixture<ProjectsShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsShowcaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectsShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
