import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [DataService]
})
export class AppComponent implements OnInit {
  title: string = 'css-angular';
  apiData: string[] = [];
  searchResults: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.apiData = this.dataService.result;
  }

  onSearch(searchValue: string, data: string[]): void {
    console.log('Search value:', searchValue, '|  Data:', data);
    const filteredSearch = data.filter((item) =>
      item.startsWith(searchValue)
    );
    console.log(filteredSearch);
    this.searchResults = filteredSearch;
  }

  onToggleChange(toggleValue: boolean): void {
    console.log(
      'Toggler switched to: ',
      toggleValue ? 'Active state' : 'Inactive state'
    );
  }
}
