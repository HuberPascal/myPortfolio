import { Component, Injector } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private appComponent: AppComponent;

  constructor(private injector: Injector) {
    this.appComponent = this.injector.get(AppComponent);
  }

  scrollToSection(sectionId: string) {
    this.appComponent.scrollToSection(sectionId);
  }

  scrollToTop() {
    const body = document.querySelector('body');
    if (body) {
      body.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
