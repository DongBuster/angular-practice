import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import  routesConfig from './app/route/app-routing.module';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routesConfig),
    provideAnimations()

]
}).catch(err => console.error(err));
