import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { EScreenType } from '../enums/EScreenType';
import { BrowserWidthService } from '../services/browser-width.service';

@Directive({
  selector: '[appOnlyForScreen]',
})
export class OnlyForScreenDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private browserWidthService: BrowserWidthService,
  ) {}

  @Input() set appOnlyForScreen(screenType: EScreenType) {
    const condition = this.browserWidthService.isValidScreenType(screenType);

    if (condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }

    this.browserWidthService.onBrowserWidthChange.subscribe(); // TODO!
  }
}
