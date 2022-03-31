import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[shFor]',
})
export class ShForDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input()
  set shFor(times: number) {
    for (let index = 0; index < times; index++) {
      this.viewContainer.createEmbeddedView(this.templateRef, 
        {$implicit: index}
        );
    }
  }
}
