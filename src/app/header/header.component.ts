import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(private scrollService: ScrollService) {}

  scrollToSection(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }

  scrollToTop() {
    const body = document.querySelector('body');
    if (body) {
      body.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
