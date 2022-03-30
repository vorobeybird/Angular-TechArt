import {
  Directive,
  HostListener,
  ElementRef,
  OnInit,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appDebounceClick]',
})
export class DebounceClickDirective implements OnInit {
  @Input() debounceTime = 500;
  @Output() debounceClick = new EventEmitter();

  private clicks = new Subject();
  private subscription = new Subscription();

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.subscription.add(
      this.clicks
        .pipe(debounceTime(this.debounceTime))
        .subscribe((e) => this.debounceClick.emit(e))
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event']) clickEvent(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
