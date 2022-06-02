import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'css-angular';
  public testInputValue: number = 0; 
  constructor() {}

  ngOnInit(): void {
  }

  public setTestInputValue(e:any):void {
    this.testInputValue = e.target.value 
  }

  onToggleChange(toggleValue: boolean): void {
    console.log(
      'Toggler switched to: ',
      toggleValue ? 'Active state' : 'Inactive state'
    );
  }

  log():void{
    console.log('Debounce click works')
  }
}
