import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core'



@Directive({
  selector: '[shFor]'
})
export class ShForDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}


  @Input()
  set shFor(times: number) {
    for (let i = 0; i < times; i++) {
      this.viewContainer.createEmbeddedView(this.templateRef,{
        $implicit: i
      });
    }
  }
}
