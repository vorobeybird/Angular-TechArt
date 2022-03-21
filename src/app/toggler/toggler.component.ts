import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.css'],
})
export class TogglerComponent implements OnInit {

  @Input() public isActive : boolean = true;
  @Input() public disabled : boolean = false;

  @Output() onChange: EventEmitter< boolean > = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  toggleActive(): void {
    this.isActive = !this.isActive;
    this.onChange.emit(this.isActive)
  }
  
  get statusLabel(): string {
    return this.isActive ? 'Active' : 'Inactive';
  }
}
