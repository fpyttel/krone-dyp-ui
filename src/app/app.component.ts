import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { version } from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  uiVersion;
  apiVersion;

  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

     // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use(translate.getBrowserLang() ? translate.getBrowserLang() : 'en');

    // get version info
    this.uiVersion = version;
    this.apiVersion = '1.2.0';
  }

}
