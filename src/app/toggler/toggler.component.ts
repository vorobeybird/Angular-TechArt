import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.css']
})
export class TogglerComponent implements OnInit {

  constructor() { }

  public isActive = true;

  ngOnInit(): void {
  }

  toggleActive(){
    this.isActive = !this.isActive
  }

  get statusLabel():string{

    return this.isActive ? 'Active' : 'Inactive'

  }

}
