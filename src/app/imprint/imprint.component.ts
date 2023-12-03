import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss',
})
export class ImprintComponent implements OnInit {
  ngOnInit() {
    const body = document.querySelector('body');
    if (body) {
      body.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
