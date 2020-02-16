import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mytitle = 'my title test';// 翻译的title和这里无关
  myObj = { name: "Jhon", sex: "girl" };
  constructor(private translateService: TranslateService) { 
    translateService.setDefaultLang('en');
  }
  useLanguage(language: string) {
    this.translateService.use(language);

  }
}
