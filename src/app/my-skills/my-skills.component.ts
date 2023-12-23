import { Component, OnInit, Injector } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent implements OnInit {
  private appComponent: AppComponent;
  scrolled: boolean = false;

  constructor(
    private scrollService: ScrollService,
    private injector: Injector
  ) {
    this.appComponent = this.injector.get(AppComponent);
  }

  ngOnInit() {
    this.scrollService.scrollEvent.subscribe((sectionId) => {
      this.scrollToSection(sectionId);
    });
  }

  scrollToSection(sectionId: string) {
    this.appComponent.scrollToSection(sectionId);
  }

  mySkillsIcons: string[] = [
    'angular-icon.png',
    'typescript-icon.png',
    'javascript-icon.png',
    'html-icon.png',
    'firebase-icon.png',
    'git-icon.png',
    'css-icon.png',
    'api-icon.png',
    'scrum-icon.png',
    'material-design-icon.png',
  ];

  skills: string[] = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'Firebase',
    'GIT',
    'CSS',
    'Rest-Api',
    'Scrum',
    'Material design',
  ];
}
