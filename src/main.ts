import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import  routesConfig from './app/route/app-routing.module';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import {provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routesConfig),
    provideAnimations(),
    provideHttpClient()
]
}).catch(err => console.error(err));
