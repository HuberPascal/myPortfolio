import { Component, Injector } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-above-the-fold',
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss',
})
export class AboveTheFoldComponent {
  private appComponent: AppComponent;

  constructor(private injector: Injector) {
    this.appComponent = this.injector.get(AppComponent);
  }

  scrollToSection(sectionId: string) {
    this.appComponent.scrollToSection(sectionId);
  }
}
