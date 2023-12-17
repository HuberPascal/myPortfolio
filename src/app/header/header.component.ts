import { Component, Injector } from '@angular/core';
import { AppComponent } from '../app.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private appComponent: AppComponent;

  constructor(private injector: Injector, public translate: TranslateService) {
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
