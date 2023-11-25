import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
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
