import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  scrollToTop() {
    const body = document.querySelector('body');
    if (body) {
      body.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
