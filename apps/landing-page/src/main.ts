import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { LandingPageComponent } from './app/landing-page.component';

bootstrapApplication(LandingPageComponent, appConfig).catch((err) =>
  console.error(err)
);
