import { enableProdMode, importProvidersFrom } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { withInterceptorsFromDi, provideHttpClient, withInterceptors } from '@angular/common/http';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { routes } from './app/app-routes';
import { provideRouter } from '@angular/router';
import { auth } from './app/authorization/auth';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule),
        provideHttpClient(
          withInterceptorsFromDi(),
          withInterceptors([auth])
        ),
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(routes),

    ]
})
  .catch(err => console.error(err));
