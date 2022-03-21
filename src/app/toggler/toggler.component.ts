import { Component, Input,Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.css'],
})
export class TogglerComponent implements OnInit {

  @Input() public isUserActive : boolean = true;
  @Input() public disabled : boolean = false;

  @Output() onChange = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  toggleActive() {
    this.isUserActive = !this.isUserActive;
    this.onChange.emit(this.isUserActive)
  }
  
  get statusLabel(): string {
    return this.isUserActive ? 'Active' : 'Inactive';
  }
}
