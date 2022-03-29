import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'css-angular';

  constructor() {}

  ngOnInit(): void {
  }

  onToggleChange(toggleValue: boolean): void {
    console.log(
      'Toggler switched to: ',
      toggleValue ? 'Active state' : 'Inactive state'
    );
  }
}
