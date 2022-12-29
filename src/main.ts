// import './polyfills';

// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';

// platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
//   // Ensure Angular destroys itself on hot reloads.
//   if (window['ngRef']) {
//     window['ngRef'].destroy();
//   }
//   window['ngRef'] = ref;

//   // Otherwise, log the boot error
// }).catch(err => console.error(err));

// in the main.ts file
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom, InjectionToken } from '@angular/core';
import { APP_ROUTES } from './app/app.routes';
import { RouterModule } from '@angular/router';

export interface AppConfig {
  title: string;
}

const appConfig: AppConfig = {
  title: 'jimk@prod',
};

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(APP_ROUTES)),
    {
      provide: APP_CONFIG,
      useValue: appConfig,
    },
  ],
});
