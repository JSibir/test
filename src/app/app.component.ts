import { Component } from '@angular/core';
import { BrowserWidthService } from './services/browser-width.service';
import { EScreenType } from './enums/EScreenType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public EScreenType = EScreenType;

  private browserWidthService: BrowserWidthService;

  constructor() {
    this.browserWidthService = new BrowserWidthService({
      mobile: 500,
      tablet: 1000,
    });
  }
}
