import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent implements OnInit {
  scrolled: boolean = false;
  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    this.scrollService.scrollEvent.subscribe((sectionId) => {
      this.scrollToSection(sectionId);
    });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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
    'Typescript',
    ' JavaScript',
    ' HTML',
    'Firebase',
    'GIT',
    'CSS',
    'Rest-Api',
    'Scrum',
    'Material design',
  ];
}
