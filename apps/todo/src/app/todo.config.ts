import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

export const todoConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
  ],
};
