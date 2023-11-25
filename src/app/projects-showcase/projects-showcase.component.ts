import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-showcase',
  templateUrl: './projects-showcase.component.html',
  styleUrl: './projects-showcase.component.scss',
})
export class ProjectsShowcaseComponent {
  projects = [
    {
      imageSrc: '../../assets/image/join-photo.png',
      title: 'Join',
      technologies: 'Angular | Typescript | HTML | Firebase',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      liveTestLink: 'Link zum Live-Test',
      githubLink: 'Link zum GitHub-Repo',
    },
    {
      imageSrc: '../../assets/image/join-photo.png',
      title: 'El pollo loco',
      technologies: 'JavaScript | HTML | CSS',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae suscipit perferendis...',
      liveTestLink: 'Link zum Live-Test',
      githubLink: 'Link zum GitHub-Repo',
    },
    {
      imageSrc: '../../assets/image/join-photo.png',
      title: 'Simple CRM',
      technologies: 'Angular | Firebase',
      description:
        'A very Simple Customer Relationship Management system working with CRUD functionality.',
      liveTestLink: 'Link zum Live-Test',
      githubLink: 'Link zum GitHub-Repo',
    },
  ];

  getCssClasses(index: number): object {
    return {
      'odd-projects': index % 2 !== 0,
    };
  }

  getMirroredClasses(index: number): object {
    return {
      'odd-mirrored': index % 2 !== 0,
    };
  }

  getMirroredBtnClasses(index: number): object {
    return {
      'odd-project-btn-container': index % 2 !== 0,
    };
  }
}
