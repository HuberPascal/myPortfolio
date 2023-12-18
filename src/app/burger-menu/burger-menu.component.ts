import { Component, Renderer2, Injector } from '@angular/core';
import { AppComponent } from '../app.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss',
})
export class BurgerMenuComponent {
  isActive: boolean = false;

  private appComponent: AppComponent;

  constructor(
    private renderer: Renderer2,
    private injector: Injector,
    public translate: TranslateService
  ) {
    this.appComponent = this.injector.get(AppComponent);
  }

  toggleMenu() {
    this.isActive = !this.isActive;

    if (this.isActive) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(document.body, 'overflow');
    }
  }

  scrollToSection(sectionId: string) {
    this.appComponent.scrollToSection(sectionId);
  }
}
