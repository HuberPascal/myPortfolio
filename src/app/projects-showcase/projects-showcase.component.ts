import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-showcase',
  templateUrl: './projects-showcase.component.html',
  styleUrl: './projects-showcase.component.scss',
})
export class ProjectsShowcaseComponent {
  projects = [
    {
      imageSrc: '../../assets/image/join.png',
      title: 'Join',
      technologies: 'JavaScript | HTML | CSS',
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      liveTestLink: 'https://pascal-huber.developerakademie.net/Join-Privat',
      githubLink: 'https://github.com/HuberPascal/Join-Privat/',
    },
    {
      imageSrc: '../../assets/image/Pollo-loco.png',
      title: 'El pollo loco',
      technologies: 'JavaScript | HTML | CSS',
      description:
        'A simple jump-and-run game using an object-oriented approach. Help Pepe gather salsa bottles to defend against the aggressive chicken.',
      liveTestLink: 'https://pascal-huber.developerakademie.net/El-pollo-loco/',
      githubLink: 'https://github.com/HuberPascal/El-pollo-loco',
    },
    {
      imageSrc: '../../assets/image/join.png',
      title: 'Simple CRM',
      technologies: 'Angular | Firebase',
      description:
        'A very Simple Customer Relationship Management system working with CRUD functionality.',
      liveTestLink: 'Link zum Live-Test',
      githubLink: 'Link zum GitHub-Repo',
    },
    {
      imageSrc: '../../assets/image/pokedex.png',
      title: 'Pokédex',
      technologies: 'JavaScript | HTML | CSS | API',
      description:
        'Based on the PokeAPI a simple library that provides and catalogues pokemon information.',
      liveTestLink: 'https://pascal-huber.developerakademie.net/Pokedex/',
      githubLink: 'https://github.com/HuberPascal/Pokedex',
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
