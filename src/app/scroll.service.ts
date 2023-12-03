import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  scrollEvent = new EventEmitter<string>();

  constructor() {}

  scrollToSection(sectionId: string) {
    this.scrollEvent.emit(sectionId);
  }
}
