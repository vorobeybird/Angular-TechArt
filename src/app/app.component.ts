import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'css-angular';

  onToggleChange(toggleValue: boolean) {
    console.log('Toggler switched to: ', toggleValue ? 'Active state' : 'Inactive state');
  }
}
