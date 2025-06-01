import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '@nx-angular/header';

@Component({
  selector: 'landing-page-root',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  imports: [HeaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LandingPageComponent {

}
