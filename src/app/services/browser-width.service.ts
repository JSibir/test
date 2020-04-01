import { HostListener, Injectable } from '@angular/core';
import { IConfig } from '../interfaces/IConfig';
import { Subject } from 'rxjs';
import {EScreenType} from '../enums/EScreenType';

@Injectable({
  providedIn: 'root',
})
export class BrowserWidthService {

  public onBrowserWidthChange = new Subject();
  public browserWidth: number;

  private config: IConfig;

  constructor(private initialConfig: IConfig) {
    this.config = initialConfig;
    this.browserWidth = window.innerWidth;
  }

  @HostListener('window:resize')
  onResize() {
    this.browserWidth = window.innerWidth;
    this.onBrowserWidthChange.next(this.browserWidth);
  }

  public isValidScreenType(screenType: EScreenType) {
    switch (screenType) {
      case EScreenType.MOBILE:
        return this.browserWidth < this.config.mobile;
      case EScreenType.TABLET:
        return this.config.mobile <= this.browserWidth && this.browserWidth < this.config.tablet;
      case EScreenType.DESKCTOP:
        return this.config.tablet <= this.browserWidth;
    }
  }
}
